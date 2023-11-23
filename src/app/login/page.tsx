"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Success from "@/components/notification/success";
import Failed from "@/components/notification/failed";
import Licensebadge from "@/components/license/status";
import LicenseModal from "@/components/license/modal";
import Login from "@/components/login";
import { routes } from "@/constants/router";

export default function Home() {
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("a");
  const [showModal, setShowModal] = useState(false);
  const [alert, showAlert] = useState({
    warn: false,
    message: "Checking license ...",
  });
  const [showNotificationOfSuccess, setShowNotificationOfSuccess] =
    useState(false);
  const [showNotificationOfFailed, setShowNotificationOfFailed] =
    useState(false);
  const [licensevalidate, setLicensevalidate] = useState(false);

  const router = useRouter();

  const checkLisence = useCallback(async () => {
    let licenseKey = localStorage.getItem("licensekey");
    let licenseId = localStorage.getItem("licenseid");
    let data: any;
    if (licenseKey !== null && licenseKey !== '') {
      const postData =
        licenseId === ""
          ? { license_key: licenseKey }
          : {
              license_key: licenseKey,
              license_id: licenseId,
            };
      const license = await fetch(
        "https://api.lemonsqueezy.com/v1/licenses/validate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );
      data = await license.json();
    } else {
      data = { valid: false };
    }
    if (data?.valid) {
      setUserEmail(data?.meta?.customer_email);
      setLicensevalidate(true);
      showAlert({ warn: false, message: "License is valid" });
    } else {
      setLicensevalidate(false);
      showAlert({ warn: true, message: "License is invalid" });
    }
  }, []);

  useEffect(() => {
    checkLisence();
  }, [checkLisence]);

  const checkEmail = useCallback(() => {
    if (email !== "") {
      if (userEmail === email) {
        setShowNotificationOfSuccess(true);
        // message login success
        router.push(routes.setting);
      } else {
        if (licensevalidate) {
          setShowNotificationOfFailed(true);
          // message login failed
        } else {
          //input license
          setShowModal(true);
        }
      }
    }
  }, [email,licensevalidate]);
  useEffect(() => {
    checkEmail();
  }, [checkEmail]);

  const handleLicenseSubmit = async () => {
    await checkLisence();
    setShowModal(false);
  };

  const handleCloseNotificationOfSuccess = () => {
    setShowNotificationOfSuccess(false);
  };

  const handleCloseNotificationOfFailed = () => {
    setShowNotificationOfFailed(false);
  };

  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden text-left text-base text-midnightblue font-roboto">
      <Login getEmail={(e: string) => setEmail(e)} />
      <Licensebadge alert={alert} />
      <Success
        showNotification={showNotificationOfSuccess}
        onCloseNotification={handleCloseNotificationOfSuccess}
      />
      <Failed
        showNotification={showNotificationOfFailed}
        onCloseNotification={handleCloseNotificationOfFailed}
      />
      {showModal && (
        <LicenseModal
          closeModal={() => setShowModal(false)}
          handleLicenseSubmit={handleLicenseSubmit}
        />
      )}
    </div>
  );
}

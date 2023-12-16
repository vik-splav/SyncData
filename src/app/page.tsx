"use client";
import {invoke} from "@tauri-apps/api/tauri";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard () {
  const router = useRouter();

  useEffect(() => {
    router.push("/setting/setting");
  }, []);
  return <div></div>;
};

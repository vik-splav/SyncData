import React from "react";
import Image from "next/image";
import SettingContent from "./settingcontent";
import Header from "./header";
import Navbar from "./navbar";
const Settings: React.FC = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-4/5 bg-gray-200 h-screen">
        <Header />
        <SettingContent />
      </div>
    </div>
  );
};

export default Settings;

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoom Clone",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col pb-6 pt-28 max-md:pb-14 px-5">
          <div className="w-full ">{children}</div>
        </section>
      </div>
    </div>
  );
};

export default HomeLayout;

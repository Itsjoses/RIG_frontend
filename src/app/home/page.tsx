import CardDiv from "@/components/card/cardDiv";
import Header from "@/pages/header/header";
import Navbar from "@/pages/header/navbar";
import { ResponsiveLayout, ResponsiveLayoutBorder } from "@/pages/utilities/responsiveLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#EBF0F9] ">
      <Header/>
      <Navbar/>
      <main>
          <ResponsiveLayout>
            <div className="w-full mx-auto m-4 p-4 flex justify-end gap-3 bg-white rounded-md drop-shadow-md">
              asd
            </div>
          </ResponsiveLayout>
      </main>

    </div>
  );
}

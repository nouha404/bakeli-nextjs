"use client";

import Sidebar from "@/app/dashboard/_components/Sidebar";

export default function Layout({ children }) {

    return (
        <main className="flex">

        <div className="flex flex-col px-10 text-white   justify-centert-bold pt-4 dashboard w-[310px] bg-primary_color h-[1166px]">
            <Sidebar/>

        </div>
            <div className="right bg-dashColor w-[1055px] ">
                {children}
            </div>
        </main>



    );
}
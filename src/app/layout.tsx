import type { Metadata } from "next";
import { HiMenuAlt1 } from "react-icons/hi";
import "./globals.css";
import {
    PrivateSpaceMenuItem,
    PublicSpaceMenuItem,
} from "@/components/MenuItems";

export const metadata: Metadata = {
    title: "PollKit - Simple Polling App",
    description: "Create, share, and vote on polls in real-time with PollKit.",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <div className="drawer">
                    <input
                        id="navigationDrawer"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content flex flex-col">
                        {/* Navbar */}
                        <div className="navbar bg-base-300 w-full">
                            <div className="flex items-center w-full lg:max-w-[1024px] lg:mx-auto">
                                <div className="flex-none lg:hidden">
                                    <label
                                        htmlFor="navigationDrawer"
                                        aria-label="open sidebar"
                                        className="btn btn-square btn-ghost"
                                    >
                                        <HiMenuAlt1 size={"24px"} />
                                    </label>
                                </div>
                                <div className="mx-2 flex-1 lg:flex-none px-2 text-logo">
                                    PollKit
                                </div>
                                <div className="hidden flex-none lg:block">
                                    <ul className="menu menu-horizontal">
                                        {/* Navbar menu content here */}
                                        <li>
                                            <PublicSpaceMenuItem />
                                        </li>
                                        <li>
                                            <PrivateSpaceMenuItem />
                                        </li>
                                    </ul>
                                </div>
                                <button className="btn btn-primary btn-outline lg:ml-auto">
                                    Login
                                </button>
                            </div>
                        </div>

                        {/* Page content here */}
                        <div className="w-full lg:max-w-[1024px] lg:mx-auto">
                            {children}
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label
                            htmlFor="navigationDrawer"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu bg-base-200 min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <li>
                                <PublicSpaceMenuItem />
                            </li>
                            <li>
                                <PrivateSpaceMenuItem />
                            </li>
                        </ul>
                    </div>
                </div>
            </body>
        </html>
    );
}

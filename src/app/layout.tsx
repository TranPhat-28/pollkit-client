import Navbar from "@/components/Navbar";
import SidebarDrawer from "@/components/SidebarDrawer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PollKit - Simple Polling App",
  description: "Create, share, and vote on polls in real-time with PollKit."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <div className="drawer">
          <input
            id="navigationDrawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content flex flex-col">
            <Navbar />
            {/* Page content here */}
            <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-[1028px] mx-auto">
              {children}
            </div>
          </div>
          <SidebarDrawer />
        </div>
      </body>
    </html>
  );
}

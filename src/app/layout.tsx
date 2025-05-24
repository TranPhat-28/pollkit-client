import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "PollKit - Simple Polling App",
    description: "Create, share, and vote on polls in real-time with PollKit.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

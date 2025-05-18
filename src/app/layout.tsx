import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import React from "react";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Code Jelly",
    description: "Code Editor and Snippets Sharing App",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                {/*<div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col">*/}
                    <ConvexClientProvider>
                        {children}
                    </ConvexClientProvider>
                    <Footer/>
                {/*</div>*/}
                </body>
            </html>
        </ClerkProvider>
    );
}

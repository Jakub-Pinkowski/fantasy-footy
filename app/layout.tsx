import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
    title: "Fantasy Footy",
    description: "Basically guaranteed 10k finish",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
                <Footer />
            </body>
        </html>
    );
}

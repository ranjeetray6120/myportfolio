import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AiAssistant from "@/components/AiAssistant";
import Cursor from "@/components/Cursor";
import StaggeredGrid from "@/components/StaggeredGrid";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
    title: "Ranjeet Kumar | Full Stack Developer",
    description: "Personal portfolio of Ranjeet Kumar, a Full Stack Developer specializing in Java, Spring Boot, and Modern Web Architectures.",
    icons: {
        icon: '/favicon.svg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${outfit.className} bg-background text-foreground antialiased selection:bg-primary/30 selection:text-black`}>
                <StaggeredGrid />
                <Navbar />
                <main className="relative z-10">{children}</main>
                <Footer className="relative z-10" />
                <AiAssistant />
                <Cursor />
            </body>
        </html>
    );
}

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <div className="flex flex-col gap-20 pb-20">
            <Hero />
            <div className="container mx-auto px-4 flex flex-col gap-32">
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
            </div>
        </div>
    );
}

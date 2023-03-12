import Image from "next/image";
import styles from "./page.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";
import AboutMe from "@/components/AboutMe/AboutMe";
import Separator from "@/components/Separator/Separator";
import Blog from "@/components/Blog/Blog";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <Services />
      <AboutMe />
      <Separator />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
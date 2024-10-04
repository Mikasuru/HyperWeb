"use client";

/*

███╗   ███╗ █████╗ ██╗███╗   ██╗
████╗ ████║██╔══██╗██║████╗  ██║
██╔████╔██║███████║██║██╔██╗ ██║
██║╚██╔╝██║██╔══██║██║██║╚██╗██║
██║ ╚═╝ ██║██║  ██║██║██║ ╚████║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝

*/

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import styles from "./page.module.css";
import { Moon } from "@/components/Moon";
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  const goToMain = () => {
    router.push('/'); // We're here
  };

  const goToContact = () => {
    router.push('/contact');
  };

  const goToSupport = () => {
    router.push('/support');
  };

  return (
    <main className={styles.main}>
      <span className={styles.tilde} onClick={goToMain}>~</span>
      <div className={styles.header}>
        <h1 className={styles.mainText}>Intertia</h1>
      </div>

      <div className={styles.textContainer}>

        <div className={styles.menuDots}>
          <div className={styles.dotted} onClick={goToMain}></div>
          <div className={styles.dot} onClick={goToContact}></div>
          <div className={styles.dot} onClick={goToSupport}></div>
        </div>

        <h2 className={styles.title}>About me</h2>
          <p className={styles.description}>
          Hello, i am Intertia. I live in Thailand where I study graphic design. Of course, I also like to code, which is why I created this website.
          </p>
      </div>

      <div className={styles.canvasContainer}>
        <Canvas>
          <Environment preset="city" />
          <OrbitControls enableZoom={false} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Moon />
        </Canvas>
      </div>

    </main>
  );
}

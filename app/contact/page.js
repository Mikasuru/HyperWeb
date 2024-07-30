/*

 ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║   
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║   
╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║   
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝   

*/

"use client";


import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import styles from "../page.module.css";
import { Gate } from "@/components/Gate";
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  const goToMain = () => {
    router.push('/');
  };

  const goToContact = () => {
    router.push('/contact'); // We're here rn
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
          <div className={styles.dot} onClick={goToMain}></div>
          <div className={styles.dotted} onClick={goToContact}></div>
          <div className={styles.dot} onClick={goToSupport}></div>
        </div>

        <h2 className={styles.title}>My contact</h2>
          <p className={styles.description}>
          Hello, if you want to see my other contact and my social media, you can see them here.
          </p>
          
          <div className={styles.buttonContainer}>

            <button 
              className={styles.imageButton1}
              onClick={() => window.open('https://discord.com/channels/users/591837095954350092', '_blank')}
            >
              <img src="/discordv2.svg" alt="Menu" className={styles.image1} />
            </button>

            <button 
              className={styles.imageButton}
              onClick={() => window.open('https://youtube.com/@kukuri_xyz', '_blank')}
            >
                <img src="/youtube.svg" alt="Menu" className={styles.image} />
            </button>
            
          </div>

      </div>

      <div className={styles.canvasContainer}>
        <Canvas>
          <Environment preset="city" />
          <OrbitControls enableZoom={false} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Gate />
        </Canvas>
      </div>

    </main>
  );
}

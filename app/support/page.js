"use client";

import { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import styles from "../page.module.css";
import { Gun } from "@/components/Gun";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);

  const goToMain = () => {
    router.push('/');
  };

  const goToContact = () => {
    router.push('/contact'); 
  };

  const goToSupport = () => {
    router.push('/support'); // We're here rn
  };

  const handleCopy = () => {
    const textToCopy = '1JpP51gP9gtcmNavmWZHieSy1pibajf78C';
    navigator.clipboard.writeText(textToCopy).then(() => {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000); // ซ่อนกล่องหลังจาก 3 วินาที
    }).catch(err => {
      console.error('การคัดลอกข้อความล้มเหลว:', err);
    });
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
          <div className={styles.dot} onClick={goToContact}></div>
          <div className={styles.dotted} onClick={goToSupport}></div>
        </div>

        <h2 className={styles.title}>Support me!</h2>
        <p className={styles.description}>
          If you want to support me, you can use the following support infomation!
        </p>
        
        <div className={styles.buttonContainer}>
          <button 
            className={styles.imageButton1}
            onClick={handleCopy}
          >
            <img src="/btc.svg" alt="Menu" className={styles.image1} />
          </button>

          <button 
            className={styles.imageButton2}
            onClick={() => window.open('https://buymeacoffee.com/kukuri', '_blank')}
          >
            <img src="/bmaf.svg" alt="Menu" className={styles.image2} />
          </button>
        </div>
      </div>

      {showSuccess && (
        <div className={styles.successBox}>
          Success
        </div>
      )}

      <div className={styles.canvasContainer}>
        <Canvas>
          <Environment preset="city" />
          <OrbitControls enableZoom={true} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Gun />
        </Canvas>
      </div>
    </main>
  );
}

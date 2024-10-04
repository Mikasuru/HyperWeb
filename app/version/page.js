import styles from "../page.module.css";

export default function KTversion() {
  const ver = `0.0.1`;

  return (
    <div className={styles.codeContainer}>
      <pre className={styles.codeBlock}>
        <code>{ver}</code>
      </pre>
    </div>
  );
}
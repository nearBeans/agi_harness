import styles from './_css/main.module.css';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1>AGI Harness</h1>
      </header>
      <main>
        <section className={styles.sidebar}>
          サイドバー
        </section>
        <section className={styles.content}>
          チャット
        </section>
      </main>
      <footer className={styles.footer}>
        フッター
      </footer>
    </>
  );
}
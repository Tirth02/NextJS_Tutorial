'use client'
import custom from "./custom.module.css";
import other from "./other.module.css";
import outside from '@/style/outside.module.css';
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const [h3Style, setH3Style] = useState({backgroundColor:"green"});
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home Page</h1>
        <h2 className={custom.main}>CSS Modules with NextJS</h2>
        <h2 className={other.main}>CSS Modules with NextJS</h2>
        <h2 className={outside.main}>USING CSS FROM OUTSIDE FOLDER</h2>
        <h2></h2>
        <Link href="/login">Go to Login Page</Link>
        <br/>
        <Link href="/about">Go to About Page</Link>
      </main>
      
    </div>
  );
}



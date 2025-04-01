'use client'
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const [h3Style, setH3Style] = useState({backgroundColor:"green"});
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home Page</h1>
        {/* In NextJs there is no Internal CSS only External and inline css is allowed and priority of Inline CSS is greater than External CSS */}
        <h2 style={{color: "red"}}>Learning Next JS</h2>
        <h3 style={h3Style}>Changing Heading</h3>
        <button onClick={() => setH3Style({backgroundColor:"purple"})}>Change color</button>
        <Link href="/login">Go to Login Page</Link>
        <br/>
        <br/>
        <Link href="/about">Go to About Page</Link>
      </main>
      
    </div>
  );
}



'use client'
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home Page</h1>
        <Link href="/login">Go to Login Page</Link>
        <br/>
        <br/>
        <Link href="/about">Go to About Page</Link>
      </main>
      
    </div>
  );
}



import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home Page</h1>
        <User name="Tirth"/>
        <User name="Jaswant"/>
        <User name="Yash"/>
        <User name="Het"/>
      </main>
      
    </div>
  );
}

const User = (props) =>{
  return(
    <div>
      <h2> Your name is {props.name}</h2>
    </div>
  )
} 

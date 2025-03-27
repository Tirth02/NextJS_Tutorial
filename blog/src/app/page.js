'use client'
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  // states in NextJS (when the state is change page re renders)
  const [name,setName] = useState("Tirth");

  // whereas in variable page is not re render when it changes
  let name2 = "Tirth";
  // function in next 
  const apple = () =>{
    //alert("fRUIT");
    // setName("Manish");
    name2 = "Manish";
  }

  const InnerComp = () =>{
    return (
      <h1>Inner Component</h1>
    )
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home Page</h1>
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

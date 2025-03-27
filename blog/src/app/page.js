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
        {/* <h2>This is {name} from Ahmedabad</h2> */}
        <h2>This is {name2} from Ahmedabad</h2>
        

        {/* below both thingperforms same thing what is the difference we will see it in future */}
        {/* <InnerComp/> */}
        {InnerComp()}

        {/*  function call in nextJS */}
        <button onClick={() => apple()}>Click me</button>

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

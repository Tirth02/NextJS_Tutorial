import React from 'react'
import Image from 'next/image';
import Profile from '../../../public/next.svg';
const Random = () => {
    console.log(Profile);
  return (
    <div>
      {/* <Image src={Profile} height={200} width={400} alt='Image not loaded'/> */}
      {/* Image tag of Next JS is better than html img tag as NextJs Image optimizes image according to screen need */}
      {/* <Image src={Profile} alt='Image not loaded'/>
      <img src={Profile.src}/> */}
      <Image src="https://upload.wikimedia.org/wikipedia/commons/2/24/Delleboersterheide%2C_natuurgebied_van_het_It_Fryske_Gea._05-02-2025._%28actm.%29_03.jpg" alt='Image not appearing' width={400} height={500}/>
    </div>
  )
}

export default Random

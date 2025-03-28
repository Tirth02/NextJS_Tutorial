import React from "react";
const Lecture = async({params}) => {

    // new way to handle params as in future nextjs version we will not be able to directly use params
    const {lecture} =  await params;
    console.log(lecture);
    
  return (
    <div>
      <h1>Day of college: {params.lecture[0]}</h1>
      {
        params.lecture.length > 1 && (<h1>Lecture no. {params.lecture[1]}</h1>)
      }
      
    </div>
  )
}

export default Lecture

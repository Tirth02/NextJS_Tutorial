import React from 'react'
import { redirect } from 'next/navigation'
const NextRedirection = () => {
    //redirect("/random"); // If page is under maintainance we can also not access this page then redirection must be done through next.config file.
  return (
    <div>
      This is Next redirection.
    </div>
  )
}

export default NextRedirection

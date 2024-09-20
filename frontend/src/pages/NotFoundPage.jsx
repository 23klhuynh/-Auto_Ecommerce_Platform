import React from 'react'

function NotFoundPage() {
    localStorage.removeItem("authToken");
  return (
    <div>NotFoundPage</div>
  )
}

export default NotFoundPage
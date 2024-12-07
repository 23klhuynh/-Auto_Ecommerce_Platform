import React from 'react'

function SubmitButton({text="submit", className, type, onClick}) {
  return (
    <button className={`${className}`} onClick={onClick} type={type}>
        {text}
    </button>
  )
}

export default SubmitButton
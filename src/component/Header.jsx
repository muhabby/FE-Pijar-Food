import React from 'react'

export default function Header({name, count}) {
  return (
    <div>
          <h1>{count} - {name}</h1>
    </div>
  )
}

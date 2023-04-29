import React from 'react'

export default function Top({children}) {
  const styles = {
    background: "#54d654",
    height: "100vh"
  }
  return (
    <div style={styles}>{children}</div>
  )
}

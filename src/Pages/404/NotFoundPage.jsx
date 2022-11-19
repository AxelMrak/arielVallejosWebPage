import React from 'react'

function NotFoundPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh'}}>
        <h2 style={{ fontSize: '4rem' }}>404: Page not found</h2>
        <p>Please return to homepage...</p>
    </div>
  )
}

export default NotFoundPage
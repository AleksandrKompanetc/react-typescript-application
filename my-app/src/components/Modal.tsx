import React from 'react'

interface ModalProps {
  children: React.ReactNode
  
}

export function Modal({children}): ModalProps {
  return (
    <>
      <div className="modal" />
      <div className="modal-window">
        <h1>Modal</h1>
        {children}
      </div>
    </>
  )
}
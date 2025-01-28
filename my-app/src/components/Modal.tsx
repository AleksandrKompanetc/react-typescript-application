import React from 'react'

interface ModalProps {
  children: React.ReactNode
  title: string
}

export function Modal({children, title}): ModalProps {
  return (
    <>
      <div className="modal" />
      <div className="modal-window">
        <h1>{title}</h1>
        {children}
      </div>
    </>
  )
}
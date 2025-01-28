import React from 'react'

interface ModalProps {
  children: React.ReactNode
  title: string
  onClose: () => void
}

export function Modal({children, title, onClose}): ModalProps {
  return (
    <>
      <div className="modal" onClick={onClose} />
      <div className="modal-window">
        <h1>{title}</h1>
        {children}
      </div>
    </>
  )
}
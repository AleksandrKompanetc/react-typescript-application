export function Modal({ children }) {
  return (
    <>
      <div className="modal" />
      <div className="modal-window">
        {children}
      </div>
    </>
  )
}
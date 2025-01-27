export function CreateProduct() {
  return (
    <form action="">
      <input 
        type="text"
        className="create-input"
        placeholder="Enter product title..."
      />
      <button type="submit" className="create-button">Create</button>
    </form>
  )
}
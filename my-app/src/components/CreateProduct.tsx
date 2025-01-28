import React from 'react'

const submitHandler = (event) => {
  event.preventDefault()
}

export function CreateProduct() {
  return (
    <form onSubmit={submitHandler}>
      <input 
        type="text" 
        className='create-input'
        placeholder='Enter product title...'  
      />

      <button 
        type='submit'
        className='create-button'
      >
        Create
      </button>
    </form>
  )
}
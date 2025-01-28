import React from 'react'

export function CreateProduct() {
  return (
    <form>
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
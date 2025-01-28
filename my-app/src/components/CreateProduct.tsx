import React, {useState} from 'react'
import { IProduct } from '../models'
import axios from 'axios'

const productData: IProduct = {
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10
  }
}

export function CreateProduct() {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()

    

    productData.title = value

    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
  }
  
  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input 
        type="text" 
        className='create-input'
        placeholder='Enter product title...'  
        value={value}
        onChange={changeHandler}
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
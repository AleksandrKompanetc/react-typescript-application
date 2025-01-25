import { useEffect, useState } from 'react'
import './App.css'
import { Product } from './components/Product'
import { IProduct } from './models'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get<Iproduct[]>('https://fakestoreapi.com/products?limit=8')
      setProducts(response.data)
    }
    fetchProducts()
  }, [])

  return (
    <div className='container'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default App

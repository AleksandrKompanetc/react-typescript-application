import { useEffect, useState } from 'react'
import './App.css'
import { Product } from './components/Product'
import { IProduct } from './models'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<Iproduct[]>('https://fakestoreapi.com/products?limit=8')
      setProducts(response.data)
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }

    useEffect(() => {
      fetchProducts()
    }, [])

    return (
      <div className='container'>
        {loading && <p>Loading...</p>}
        {error && <p style={{color: 'red'}}>{error}</p>}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    )
  }

}  export default App

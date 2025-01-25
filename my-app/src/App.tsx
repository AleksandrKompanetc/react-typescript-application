import { Product } from './components/Product'
import { useProducts } from './hooks/products'
import { Loader } from './components/Loader'
import './App.css'

function App() {
  const {loading, products, error} = useProducts()

    return (
      <div className='container'>
        {loading && <Loader />}
        {error && <p style={{color: 'red'}}>{error}</p>}
        {products.map(product => <Product key={product.id} product={product} />)}
      </div>
    )
}

export default App

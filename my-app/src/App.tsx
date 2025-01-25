import { Product } from './components/Product'
import { useProducts } from './hooks/products'

function App() {
  const {loading, products, error} = useProducts()

    return (
      <div className='container'>
        {loading && <p>Loading...</p>}
        {error && <p style={{color: 'red'}}>{error}</p>}
        {products.map(product => <Product key={product.id} product={product} />)}
      </div>
    )
}

export default App

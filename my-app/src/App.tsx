import { Product } from './components/Product'
import { useProducts } from './hooks/products'
import { Loader } from './components/Loader'
import { ErrorMessage } from './components/ErrorMessage'
import { Modal } from './components/Modal'
import { CreateProduct } from './components/CreateProduct'
import './App.css'


function App() {
  const {loading, products, error} = useProducts()

    return (
      <div className='container'>
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {products.map(product => <Product key={product.id} product={product} />)}

        <Modal title='Create new product'>
          <CreateProduct />
        </Modal>
      </div>
    )
}

export default App

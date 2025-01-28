import { Product } from './components/Product'
import { useProducts } from './hooks/products'
import { Loader } from './components/Loader'
import { ErrorMessage } from './components/ErrorMessage'
import { Modal } from './components/Modal'
import { CreateProduct } from './components/CreateProduct'
import { useState } from 'react'
import { IProduct } from './models'
import './App.css'

function App() {
  const {loading, products, error, addProduct} = useProducts()
  const [modal, setModal] = useState(false)

  const createHandler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  }

    return (
      <div className='container'>
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {products.map(product => <Product key={product.id} product={product} />)}

        {modal && <Modal title='Create new product' onClose={() => setModal(false)}>
          <CreateProduct onCreate={createHandler} />
        </Modal>}

        <button
          onClick={() => setModal(true)} 
          className='add-product-button'
        >
          +
        </button>
      </div>
    )
}

export default App

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
  const {loading, products, error} = useProducts()
  const [modal, setModal] = useState(true)

  const createHandler = (product: IProduct) => {
    setModal(false)
  }

    return (
      <div className='container'>
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {products.map(product => <Product key={product.id} product={product} />)}

        {modal && <Modal title='Create new product'>
          <CreateProduct onCreate={createHandler} />
        </Modal>}
      </div>
    )
}

export default App

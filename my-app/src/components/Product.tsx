import { useState } from "react"
import { IProduct } from "../models"

interface ProductProps {
  product: IProduct
}

export function Product({product}: ProductProps) {
  const [details, setDetails] = useState(false)

  function toggleClick() {
    setDetails((prev) => !prev)
  }

  return (
    <div className="product">
      <img src={product.image} className="product-image" alt={product.title} />
      <p>{product.title}</p>
      <p className="product-price">{product.price}</p>
      
      <button 
        onClick={toggleClick} 
        className={details ? 'product-button active' : 'product-button'}
      >
        {details ? 'Hide Details' : 'Show Details'}
      </button>

      {details && <div>
        <p>{product.description}</p>
        <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
        </div>}
    </div>
  )
}
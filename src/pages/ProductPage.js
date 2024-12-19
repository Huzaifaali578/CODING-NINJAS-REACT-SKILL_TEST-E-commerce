import React, { useEffect } from 'react'
import ProductList from '../features/products/ProductList'
import { useDispatch } from 'react-redux'
import { fetchProductAsync } from '../features/products/ProductSlice'
import { fetchCartItemAsync } from '../features/Cart/cartSlice'

export default function ProductPage() {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchProductAsync())
      dispatch(fetchCartItemAsync())
    },[dispatch])
  return (
      <div>
          <ProductList />
    </div>
  )
}

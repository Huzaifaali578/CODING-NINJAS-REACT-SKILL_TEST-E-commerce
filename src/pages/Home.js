import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductPage from './ProductPage'

export default function Home() {
  return (
      <div>
          <Navbar>
              <ProductPage />
          </Navbar>
    </div>
  )
}

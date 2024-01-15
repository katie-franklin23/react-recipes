import React from 'react'
import { categories } from '../data'

const Categories = () => {
  console.log(categories)
  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Trending Categories
      </h1>
    </div>
  )
}

export default Categories

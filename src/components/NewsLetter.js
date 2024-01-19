import React from 'react'

const NewsLetter = () => {
  return (
    <div className="max-w-[1520px] m-auto text-white px-4 bg-[#24262b]">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-2xl lg:text-4xl">
            Need advice on how to improve your flow?
          </h1>
          <p className="text-sm lg:text-base">
            Sign Up to join our newsletter and stay up to date
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Email"
              className="p-3 flex w-full rounded-md text-black"
            />
            <button className="bg-[#00df9a] text-white rounded-md font-medium lg:ml-4 my-6 px-6 py-3 border-none">
              Notify me
            </button>
          </div>
          <p className="text-xs lg:text-sm">
            We are concerned about the security of your data. Read{' '}
            <span className="text-[#00df9a]">Privacy Policy</span>
          </p>
        </div>
        <hr className="my-8 bg-gray-700 border-1"></hr>
      </div>
    </div>
  )
}

export default NewsLetter

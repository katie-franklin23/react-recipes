import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols3 gap-8 text-gray-300>">
        <div>
          <h1 className="w-full text-3xl font-bold text-orange-500">YumEats</h1>
          <p>
            Lorem, ipsum dolar sit amet conectetur apidipsicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
            <div className="flex justify-between md:w-[75%] my-6">
              <FaFacebookSquare size={30} />
              <FaInstagram size={30} />
              <FaTwitterSquare size={30} />
              <FaGithubSquare size={30} />
              <FaFacebookSquare size={30} />
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer

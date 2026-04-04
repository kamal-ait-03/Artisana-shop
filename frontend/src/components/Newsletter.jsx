import React, { useState } from 'react'

const Newsletter = () => {

  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
  }

  return (
    <div className=" w-full  text-center py-40 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-[#F5E9DA]">

      <p className="text-2xl font-semibold mb-3">
        Subscribe to our Newsletter now & get 20% off
      </p>

      <p className="text-gray-500 mb-6">
        Get the latest updates and offers
      </p>

      <form onSubmit={handleSubmit} className="flex justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="border px-4 py-2 w-64"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-black text-white px-6 py-2"
        >
          Subscribe
        </button>
      </form>

    </div>
  )
}

export default Newsletter
import React from 'react'
import Link from 'next/link'

const FourOFour = () => {
  return (
    <div className="container mx-auto h-full flex flex-col justify-center items-center">
      <h2 className="mb-4 text-4xl tracking-wide font-semibold">404 - Page Not Found</h2>
      <p className="mb-4">{`Alas, there's nothing here`}</p>
      <p className="mb-4">Sadly, the developer responsible was too lazy to implement this page</p>
      <p className="mb-4">Find new recipes by heading back to the main page</p>
      <Link href="/">
        <a className="px-3 py-5 w-96 bg-lime-400 border-2 rounded-md font-bold text-center uppercase hover:bg-lime-500 transition duration-200 hover:translate-y-1">
          Home
        </a>
      </Link>
    </div>
  )
}

export default FourOFour

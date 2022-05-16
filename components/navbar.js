import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <>
      <div className="border-b-2 border-blue-300">
        <div className="container mx-auto flex flex-row justify-between items-center px-5 md:px-10 py-5 text-xl">
          <h1 className="text-2xl">
            <Link href="/">Recipes :)</Link>
          </h1>
          <input
            type="text"
            placeholder="Search..."
            className="border-2 border-slate-400 rounded-lg placeholder:pl-2 focus:outline-none focus:ring-2 hover:ring-2"
          />
          <div className="hidden md:inline-flex flex-row">
            <ul className="flex flex-row">
              <li>
                <Link href="/">
                  <a className="p-5 hover:underline">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/my-recipes">
                  <a className="p-5 hover:underline">My recipes</a>
                </Link>
              </li>
            </ul>
            <Link href="/login">
              <button className="-mt-1 ml-3 px-5 py-1 border-2 border-lime-400 rounded-lg bg-lime-400 text-white hover:bg-green-500 transition duration-100">
                Log in
              </button>
            </Link>
          </div>
          <button
            className="block md:hidden px-5 py-1 border-2 border-slate-400 rounded-lg hover:bg-slate-100"
            onClick={handleMobileMenu}>
            Menu
          </button>
        </div>
      </div>
      <ul className={isMobileMenuOpen ? 'block' : 'hidden'}>
        <li className="block w-full text-right border-b border-slate-400 hover:bg-slate-100 transition duration-400">
          <a className="block p-4 text-xl">My recipes</a>
        </li>
        <li className="block w-full text-right border-b-2 border-blue-300 hover:bg-slate-100 transition duration-400">
          <Link href="/login">
            <a href="#" className="block p-4 text-xl">
              Log in
            </a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Navbar

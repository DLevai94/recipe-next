export default function Register() {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h2 className="text-2xl">Register 👋</h2>
      <form action="" className="flex flex-col">
        <label className="mb-2 mt-4 font-extralight leading-wider tracking-widest" htmlFor="name">
          Name:
        </label>
        <input
          className="border border-gray-600 rounded-md px-3 py-4 mb-4 text-lg font-bold placeholder:text-gray-400 focus:outline-none focus:ring-2 hover:ring-2"
          id="name"
          name="name"
          type="text"
          placeholder="Britney"
          required
        />
        <label className="mb-2 mt-4 font-extralight leading-wider tracking-widest" htmlFor="email">
          Email:
        </label>
        <input
          className="border border-gray-600 rounded-md px-3 py-4 mb-4 text-lg font-bold placeholder:text-gray-400 focus:outline-none focus:ring-2 hover:ring-2"
          id="email"
          name="email"
          type="email"
          placeholder="example@email.com"
          required
        />
        <label className="mb-2 mt-4 font-extralight leading-wider tracking-widest" htmlFor="password">
          Password:
        </label>
        <input
          className="border border-gray-600 rounded-md px-3 py-4 mb-4 text-lg font-bold placeholder:text-gray-400 focus:outline-none focus:ring-2 hover:ring-2"
          id="password"
          name="password"
          type="password"
          placeholder="Password1"
          required
        />
        <label className="mb-2 mt-4 font-extralight leading-wider tracking-widest" htmlFor="passwordAgain">
          Confirm Password:
        </label>
        <input
          className="border border-gray-600 rounded-md px-3 py-4 mb-4 text-lg font-bold placeholder:text-gray-400 focus:outline-none focus:ring-2 hover:ring-2"
          id="passwordAgain"
          name="passwordAgain"
          type="password"
          placeholder="Password1"
          required
        />
        <button
          className="px-3 py-4 border-2 rounded-md bg-lime-400 font-bold uppercase hover:bg-green-500 transition duration-200 hover:translate-y-1"
          type="submit">
          Register
        </button>
      </form>
    </div>
  )
}

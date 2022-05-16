const LogIn = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h2 className="text-2xl">Login 👋</h2>
      <form action="" className="flex flex-col">
        <label className="mb-2 mt-4 font-extralight tracking-widest" htmlFor="email">
          Email:
        </label>
        <input
          className="border border-gray-600 rounded-md py-5 px-3 mb-4 text-lg font-bold placeholder:text-gray-400 focus:outline-none focus:ring-2 hover:ring-2"
          id="name"
          name="name"
          type="email"
          placeholder="example@email.com"
          required
        />
        <label className="mb-2 mt-4 font-extralight tracking-widest" htmlFor="password">
          Password:
        </label>
        <input
          className="border border-gray-600 rounded-md py-5 px-3 mb-4 text-lg font-bold placeholder:text-gray-400 focus:outline-none focus:ring-2 hover:ring-2"
          id="password"
          name="password"
          type="password"
          placeholder="Password1"
          required
        />
        <div className="flex flex-row items-center mb-4">
          <input
            type="checkbox"
            id="stayLoggedIn"
            name="stayLoggedIn"
            className="focus:outline-none focus:ring-2 hover:ring-2"
          />
          <label htmlFor="stayLoggedIn" className="w-full ml-2 font-extralight tracking-widest">
            Stay logged in
          </label>
        </div>
        <button
          className="px-3 py-5 border-2 rounded-md bg-lime-400 font-bold uppercase hover:bg-lime-500 transition duration-200 hover:translate-y-1"
          type="submit">
          Log in
        </button>
      </form>
    </div>
  )
}

export default LogIn

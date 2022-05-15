const LogIn = () => {
  return (
    <div className="container mx-auto flex flex-col h-full items-center justify-center">
      <h2 className="text-2xl">{'Log in :)'}</h2>
      <form action="" className="flex flex-col">
        <label className="mb-2 mt-4 font-extralight leading-wider tracking-widest" htmlFor="email">
          Email:
        </label>
        <input
          className="border border-gray-600 rounded-md py-5 px-3 mb-4 text-lg font-bold placeholder:text-gray-400"
          name="name"
          type="email"
          placeholder="example@email.com"
        />
        <label className="mb-2 mt-4 font-extralight leading-wider tracking-widest" htmlFor="password">
          Password:
        </label>
        <input
          className="border border-gray-600 rounded-md py-5 px-3 mb-4 text-lg font-bold placeholder:text-gray-400"
          name="password"
          type="password"
          placeholder="Password1"
        />
        <button
          className="px-3 py-5 border-2 rounded-md bg-lime-400 text-gray-900 font-black uppercase hover:bg-green-500 transition duration-500 hover:translate-x-1 hover:translate-y-1"
          type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LogIn;

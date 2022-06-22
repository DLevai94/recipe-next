import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Recipes :) Nextjs`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto w-screen py-10 px-5 md:px-10 h-full flex flex-col justify-center">
        <h2 className="py-10 text-3xl font-semibold uppercase">
          All the recipes you&apos;ll <br />
          ever need. <br />
          In one place
        </h2>
        <button className="px-5 py-2 w-52 bg-fuchsia-500 border-4 border-black text-xl font-bold uppercase">
          Jump right in
        </button>
      </div>
    </>
  )
}

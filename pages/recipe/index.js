import { useRouter } from 'next/router'

const Recipe = () => {
  const router = useRouter()
  const { recipe } = router.query
  return <h1>jonapotkivanok</h1>
}

// TODO: getstaticpaths - https://nextjs.org/learn/basics-nextjs/data-fetching-api/getstaticpaths
// getstaticpaths render recipe pages based on a local dataset

// TODO: getstaticprops - https://nextjs.org/learn/basics-nextjs/data-fetching-api/getstaticprops
// getstaticprops gets data for each recipe page

export default Recipe

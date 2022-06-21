import Image from 'next/image'

const RecipePage = ({ title, img, ingredients, description, method, prepTime, yields }) => {
  return (
    <section id="recipe">
      <div className="container mx-auto my-10 px-5 md:px-10">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-1/3">
            <Image id="food-image" height="500" width="500" src={img} alt="Image of food" />
          </div>
          <div className="w-full md:w-2/3 md:px-10">
            <h2 id="title" className="my-5 md:mt-0 text-3xl font-bold">
              {title}
            </h2>
            <p>{description}</p>
            <p className="pt-3">
              <span className="font-bold">Preparation Time: </span>
              {prepTime}
            </p>
            <p className="pt-3">
              <span className="font-bold">Yields: </span>
              {yields}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly mt-5">
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl">Ingredients</h3>
            <ul className="ml-5 mt-5 list-disc">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-2/3 md:px-10">
            <h3 className="mt-5 md:mt-0 text-2xl">Method</h3>
            <ol className="mt-5 ml-5 list-decimal">
              {method.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export async function getStaticPaths() {
  // get paths from local json file
  const recipes = require(`../../data/recipes.js`)
  const paths = recipes.map((recipe) => ({ params: { slug: [recipe.slug] } }))
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // fetch data from local json file
  const data = require(`../../data/recipes/${context.params.slug}.json`)
  return {
    props: {
      title: data.title,
      img: data.img,
      description: data.description,
      prepTime: data.prepTime,
      yields: data.yields,
      ingredients: data.ingredients,
      method: data.method,
    },
  }
}

export default RecipePage

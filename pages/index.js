import Head from 'next/head'
import Image from 'next/image'
import Muffins from '../public/Muffins.jpeg'

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Recipes :) Nextjs`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="recipe">
        <div className="container mx-auto my-10 px-5 md:px-10">
          <div className="flex flex-col md:flex-row justify-center">
            <div className="w-full md:w-1/3">
              <Image id="food-image" src={Muffins} alt="Image of food" />
            </div>
            <div className="w-full md:w-2/3 md:px-10">
              <h2 id="title" className="my-5 md:mt-0 text-3xl font-bold">
                Best of the Best Blueberry muffins
              </h2>
              <p>
                Big Blueberry muffins with a crusty sugar topping. A recipe I got from my Grandma. The blueberries and
                the sweet batter are fabulous together. Favorites of all who have tried them. Quick and easy, made with
                few ingredients. Remember to use paper liners!
              </p>
              <p className="pt-3">
                <span className="font-bold">Preparation Time: </span>45 min
              </p>
              <p className="pt-3">
                <span className="font-bold">Yields: </span>12 muffins
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly mt-5">
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl">Ingredients</h3>
              <ul className="ml-5 mt-5 list-disc">
                <li>1/2 cup unsalted butter</li>
                <li>1 1/4 cups white sugar</li>
                <li>1/2 teaspoon salt</li>
                <li>2 eggs</li>
                <li>2 cups all-purpose flour, divided</li>
                <li>2 tsp baking powder</li>
                <li>1/2 cup buttermilk</li>
                <li>1 pint fresh blueberries</li>
                <li>2 tbsp white sugar</li>
              </ul>
            </div>
            <div className="w-full md:w-2/3 md:px-10">
              <h3 className="mt-5 md:mt-0 text-2xl">Method</h3>
              <ol className="mt-5 ml-5 list-decimal">
                <li>
                  Position rack in the middle of oven. Preheat oven to 375 degrees F (190 degrees C). Spray the top of a
                  muffin pan with non-stick coating, and line with paper liners.
                </li>
                <li>
                  In a large bowl, cream together the butter, 1 1/4 cups sugar and salt until light and fluffy. Beat in
                  the eggs one at a time. Mix together 1 3/4 cup of the flour and baking powder. Beat in the flour
                  mixture alternately with the buttermilk, mixing just until incorporated. Crush 1/4 of the blueberries,
                  and stir into the batter. Mix the rest of the whole blueberries with the remaining 1/4 cup of the
                  flour, and fold into the batter. Scoop into muffin cups. Sprinkle tops lightly with sugar.
                </li>
                <li>
                  Bake in preheated oven for 30 minutes, or until golden brown, and tops spring back when lightly
                  tapped.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

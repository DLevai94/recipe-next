const About = ({ description }) => {
  return <p className="text-center">{description}</p>
}

export async function getStaticProps() {
  // fetch data from local json file
  const data = require(`../data/about/about-content.json`)
  return {
    props: {
      description: data.description,
    },
  }
}

export default About

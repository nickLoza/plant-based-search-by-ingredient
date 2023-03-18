import { Link } from "react-router-dom"
import Helmet from "../components/helmet/Helmet"

const emojis = [
	{title: "avocado",emoji:"🥑"},
	{title: "eggplant",emoji:"🍆"},
	{title: "tomato",emoji:"🍅"},
	{title: "carrot",emoji:"🥕"},
	{title: "cucumber",emoji:"🥒"},
	{title: "potato",emoji:"🥔"},
	{title: "garlic",emoji:"🧄"},
	{title: "corn",emoji:"🌽"},
	{title: "onion",emoji:"🧅"},
	{title: "mushroom",emoji:"🍄"},
	{title: "broccoli",emoji:"🥦"},
	{title: "pea",emoji:"🟢"},
	{title: "beet",emoji:"🟣"},
	{title: "bean",emoji:"⚪"},
	{title: "chickpea",emoji:"🟡"},
]

function Home() {
	return (
		<Helmet title="home">
			<div className='home'>
			<h1 className="home__title" tabIndex={0}>Select a vegetable</h1>
			<div className="home__ingredients">
				{emojis.map((plant,i)=>(
					<Link key={i} className="home__ingredients-link" to={`/recipes/${plant.title}`} aria-label={`${plant.title}`} role="link">
						<span>{plant.emoji}</span>
						{plant.title}
					</Link>
					))}
			</div>
			</div>
		</Helmet>
	)
}

export default Home
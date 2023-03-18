import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Helmet from "../components/helmet/Helmet";

const apiKey = import.meta.env.VITE__API__KEY;

function Recipes() {
	const [ recipes, setRecipes ] = useState<Array<any>>([]);

	
	const  { plant } = useParams()


	useEffect(()=>{
		getRecipes()
	},[])

	async function getRecipes(){
		const check = localStorage.getItem(plant!);

		if(check){
			setRecipes(JSON.parse(check))
		}else{
			const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&includeIngredients=${plant}&sort=popularity&diet=vegan`);
			const data = await api.json()

			setRecipes(data.results);
			localStorage.setItem(plant!, JSON.stringify(data.results))
		}
	}


	return (
		<Helmet title={`${plant} recipes`}>
			<div className="recipes">
			<h2 className="recipes__title" tabIndex={0}>Results for {plant}</h2>
			<div className="recipes__dishes">
				{recipes.map((recipe, i)=>(
					<Link 
						key={recipe.id} 
						className="recipes__dishes-link" 
						to={`${recipe.id}`} aria-label={`Click to read more about ${recipe.title}`}>
						<img 
							className="recipes__dishes-img" 
							src={recipe.image} 
							alt={recipe.title}/>
						<p className="recipes__dishes-title">
							{recipe.title}
						</p>
					</Link>
				))}
			</div>
			</div>
		</Helmet>
	)
}

export default Recipes
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
const apiKey = import.meta.env.VITE__API__KEY;
import Helmet from "../components/helmet/Helmet";


function RecipesDetails() {

	const [ recipeCard, setRecipeCard ] = useState<string>("")

	const { plant, recipe } = useParams();

	useEffect(()=>{
		getRecipeCard()
	},[])

	async function getRecipeCard(){
		const check = localStorage.getItem(recipe!);

		if(check){
			setRecipeCard(JSON.parse(check))
		}else{
			const api = await fetch(`https://api.spoonacular.com/recipes/${recipe}/card?apiKey=${apiKey}`);
			const data = await api.json()

			setRecipeCard(data.url);
			localStorage.setItem(recipe!, JSON.stringify(data.url))
		}
	}



	return (
		<Helmet title={`${plant} recipe`}>
			<div className="recipes-details">
				<img className="recipes-details__img" aria-label="image of the recipe" src={recipeCard} alt={`${plant} recipe`}/>
			</div>
		</Helmet>
	)
}

export default RecipesDetails
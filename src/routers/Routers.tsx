import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Recipes from "../pages/Recipes"
import RecipesDetails from "../pages/RecipesDetails"


function Routers() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to ="home"/>}/>
			<Route path="home" element={<Home/>}/>
			<Route path="recipes/:plant" element={<Recipes/>}/>
			<Route path="recipes/:plant/:recipe" element={<RecipesDetails/>}/>
		</Routes>
	)
}

export default Routers
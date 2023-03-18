import { Link } from "react-router-dom";
import { GiPlantsAndAnimals } from "react-icons/gi";

function Header() {
	return (
		<header className="header" role="banner" >
			<div className="header__navbar">
				<Link className="header__navbar-logo" tabIndex={0} aria-label="click to go to home page" to={"home"}>
					<GiPlantsAndAnimals/>
					Plant-based recipes
				</Link>
			</div>
		</header>
	)
}

export default Header
import { GiPlantsAndAnimals } from "react-icons/gi";
import { AiOutlineFacebook, AiOutlineGoogle, AiOutlineTwitter } from "react-icons/ai";

function Footer() {
	return (
		<footer className="footer" role="contentinfo">
			<div className="footer__logo">
				<GiPlantsAndAnimals/>
			</div>
			<div className="footer__text">
				<div className="footer__text-group group">
					<h4 className="group__title">Contact</h4>
					<p className="group__text">+888 888 888</p>
					<p className="group__text">fakePlant@gmail.com</p>
					<div className="group__socials">
						<AiOutlineTwitter/>
						<AiOutlineFacebook/>
						<AiOutlineGoogle/>
					</div>
				</div>
				<div className="footer__text-group group">
					<h4 className="group__title">About us</h4>
					<p className="group__text">This website provides recipes that includes the ingredient selected, using fetch API and react-router-dom</p>
				</div>
				<div className="footer__text-group group">
					<h4 className="group__title">About us</h4>
					<p className="group__text">This website provides recipes that includes the ingredient selected, using fetch API and react-router-dom</p>
				</div>
			</div>			
		</footer>
	)
}

export default Footer;
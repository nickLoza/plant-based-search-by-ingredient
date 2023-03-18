
interface IHelmet{
	title: string
	children: JSX.Element | JSX.Element[]
}

function Helmet({ title, children }: IHelmet) {
	 document.title = "plant-based -"+ title;

	return (
		<>
			{children}
		</>
	)
}

export default Helmet
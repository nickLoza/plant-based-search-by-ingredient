import Layout from "../Layout";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";


describe("Layout",()=>{

	test("should render the correct components",async()=>{
		render(
			<MemoryRouter>
				<Layout/>
			</MemoryRouter>
		);
		expect(screen.getByRole("banner")).toBeDefined();
		expect(screen.getByRole("main")).toBeDefined();
		expect(screen.getByRole("contentinfo")).toBeDefined();
		const avocadoLink = screen.getByLabelText("avocado");
		fireEvent.click(avocadoLink);
		expect(screen.getByText(`Results for avocado`)).toBeDefined();
		

	})
})
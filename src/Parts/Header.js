import React from "react";
import headerImage from "../assets/images/HeaderImage.png";
import headerSideImage from "../assets/images/HeaderSideImage.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
	return (
		<div>
			<div className="h-screen max-w-screen relative">
				<img src={headerImage} alt="" className="w-full h-full object-cover" />
				<div className="absolute top-0 left-0 py-8 px-8 flex flex-row items-center ">
					<h3 className="font-tropical text-white text-5xl mr-6">HIROKU</h3>
					<h4 className="text-white mx-6 tracking-wider">Home</h4>
					<h4 className="text-white mx-6 tracking-wider">Reservations</h4>
				</div>
				<div className="absolute xl:left-[23%] 2xl:left-[30%] top-[15%] text-white flex flex-col justify-center items-center">
					<h1 className="font-tropical text-[200px]">Hiroku sushi</h1>
					<h3 className="text-3xl tracking-wider font-light">
						The #1 top rated sushi restaurant in Vancouver
					</h3>
					<Link
						activeClass="active"
						to="scroll"
						spy={true}
						smooth={true}
						offset={50}
						duration={700}
						className="w-64 h-16 tracking-wider text-xl rounded-xl text-black bg-[#FFFFFFB8] hover:bg-white duration-300 mt-40 flex items-center justify-center cursor-pointer"
					>
						Menu
					</Link>
				</div>
				<div className="absolute left-0 bottom-[-342px]">
					<img src={headerSideImage} alt="" />
				</div>
			</div>
		</div>
	);
}

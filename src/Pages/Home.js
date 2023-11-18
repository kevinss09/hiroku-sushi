import React from "react";
import headerImage from "../assets/images/HeaderImage.png";
import headerSideImage from "../assets/images/HeaderSideImage.png";
import aboutImg from "../assets/images/aboutImage.png";
import { weeklySpecialJson, popularJson, partyJson } from "../JSON/sushi";
import fullMenu from "../assets/images/FullMenu.png";

export default function Home() {
	return (
		<div className="min-h-screen font-poppins max-w-screen">
			<div className="h-screen max-w-screen relative">
				<img src={headerImage} alt="" className="w-full h-full object-cover" />
				<div className="absolute top-0 left-0 py-8 px-8 flex flex-row items-center ">
					<h3 className="font-tropical text-white text-5xl mr-6">HIROKU</h3>
					<h4 className="text-white mx-6 tracking-wider">Home</h4>
					<h4 className="text-white mx-6 tracking-wider">Reservations</h4>
				</div>
				<div className="absolute left-[30%] top-[15%] text-white flex flex-col justify-center items-center">
					<h1 className="font-tropical text-[200px]">Hiroku sushi</h1>
					<h3 className="text-3xl tracking-wider font-light">
						The #1 top rated sushi restaurant in Vancouver
					</h3>
					<button className="w-64 h-16 tracking-wider text-xl rounded-xl text-black bg-[#FFFFFFB8] hover:bg-white duration-300 mt-40">
						Menu
					</button>
				</div>
				<div className="absolute left-0 bottom-[-342px]">
					<img src={headerSideImage} alt="" />
				</div>
			</div>
			<div className="bg-[#0D0B0D] w-full flex">
				{/* Left empty part */}
				<div className="w-[20%]"></div>
				{/* Center content */}
				<div className="flex flex-col items-center justify-start py-14 text-white w-[47%]">
					<div className="w-1/2">
						<h1 className="font-tropical text-[170px]">About</h1>
						<h4 className="text-3xl font-sans text-gray-100 font-light tracking-widest leading-relaxed">
							<strong className="font-bold text-white">Hiroku Sushi</strong>, we
							believe in the art of Japanese cuisine, where every dish is a
							masterpiece of flavors, craftsmanship, and tradition.{" "}
						</h4>
						<h4 className="text-3xl font-sans text-gray-100 font-light tracking-widest mt-14 leading-relaxed">
							Our passion for delivering exceptional sushi experiences inspired
							the creation of Hiroku Sushi, a culinary haven where innovation
							meets authenticity.
						</h4>
					</div>
				</div>
				{/* Right empty part */}
				<div className="w-1/3">
					<img src={aboutImg} alt="" className="w-full h-full object-cover" />
				</div>
			</div>
			<div className="bg-[#070707] pt-20 px-20 text-white">
				<h1 className="font-tropical text-[100px]">Weekly special</h1>
				<div className="px-10 py-20">
					<div className="w-full flex flex-row justify-between h-[550px]">
						{weeklySpecialJson.map((sushi, index) => {
							return (
								<div
									className="flex flex-col items-center justify-between"
									key={index}
								>
									<img src={sushi.image} alt="" className={`Image ${index}`} />
									<h3 className="text-white text-3xl tracking-wider">
										{sushi.name}
									</h3>
									<h3 className="text-white text-3xl tracking-wider">
										{sushi.price}
									</h3>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="bg-[#0D0B0D] p-20">
				<h1 className="font-tropical text-[100px] text-center text-white">
					MENU
				</h1>
				<div>
					<h3 className="font-tropical text-[60px] text-white">
						Popular dishes
					</h3>
					<div className="grid grid-cols-5 grid-rows-1 gap-20 my-10">
						{popularJson.map((popular, index) => {
							return (
								<div className="col-span-1 bg-white flex flex-col" key={index}>
									<img
										src={popular.image}
										alt={popular.name}
										className="w-full object-cover"
									/>
									<div className="py-6 flex flex-col justify-between h-[125px]">
										<h2 className="text-center font-medium text-2xl tracking-wider">
											{popular.name}
										</h2>
										<h5 className="text-center font-light text-xl">
											{popular.price}
										</h5>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div>
					<h3 className="font-tropical text-[60px] text-white">Party Tray</h3>
					<div className="grid grid-cols-3 grid-rows-1 my-10 gap-16">
						{partyJson.map((party, index) => {
							return (
								<div className="col-span-1 bg-white flex flex-col" key={index}>
									<img
										src={party.image}
										alt={`party ${party.id}`}
										className="w-full object-cover"
									/>
									<div className="h-[250px] py-6 px-7 flex flex-col items-center justify-between">
										<div>
											<h2 className="text-center font-semibold text-2xl tracking-wider">
												{party.name}
											</h2>
											<h5 className="text-center font-sans font-light text-lg tracking-wider mt-1">
												{party.people}
											</h5>
										</div>
										<h4 className="text-center text-lg font-sans font-light tracking-wider">
											{party.desc}
										</h4>
										<h5 className="font-semibold text-xl tracking-wider">
											{party.price}
										</h5>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div>
					<h3 className="font-tropical text-[60px] text-white">Full Menu</h3>
					<div className="my-10">
						<img src={fullMenu} alt="" className="w-full h-full object-cover" />
					</div>
				</div>
			</div>
		</div>
	);
}

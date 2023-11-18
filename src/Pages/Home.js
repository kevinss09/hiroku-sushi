import React from "react";
import aboutImg from "../assets/images/aboutImage.png";
import { weeklySpecialJson, popularJson, partyJson } from "../JSON/sushi";
import fullMenu from "../assets/images/FullMenu.png";
import contactImage from "../assets/images/contactImage.png";
import Header from "../Parts/Header";
import Footer from "../Parts/Footer";

export default function Home() {
	return (
		<div className="min-h-screen font-poppins max-w-screen">
			<Header />
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
				<div className="py-20">
					<div className="w-full grid grid-cols-4 grid-rows-1 gap-14 h-[550px]">
						{weeklySpecialJson.map((sushi, index) => {
							return (
								<div
									className="col-span-1 flex flex-col items-center justify-between"
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
			<div className="bg-[#0D0B0D] p-20" name="scroll">
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
			<div className="contact w-full bg-[#070707] py-5 flex flex-row">
				<div className="w-1/2">
					<img src={contactImage} alt="" className="w-5/6 h-full" />
				</div>
				<div className="w-1/2 py-20 flex flex-col text-white">
					<h1 className="font-tropical text-[150px]">Contact Us</h1>
					<div className="mt-10">
						<h3 className="text-2xl font-bold tracking-wider">Address:</h3>
						<p className=" mt-2 font-sans text-lg tracking-widest font-light">
							1050 Hamilton St, Vancouver, BC V5R 5G4
						</p>
					</div>
					<div className="mt-14">
						<h3 className="text-2xl font-bold tracking-wider">Open Hours: </h3>
						<p className=" mt-2 font-sans text-lg tracking-widest font-light leading-loose">
							11:00 a.m. - 9:30 p.m. Monday - Wednesday <br />
							11:00 a.m. - 11:00 p.m. Thursday - Sunday <br />
							4:00 p.m. - 5:00 p.m. Break Time
						</p>
					</div>
					<div className="mt-14">
						<h3 className="text-2xl font-bold tracking-wider">Contact: </h3>
						<p className=" mt-2 font-sans text-lg tracking-widest font-light leading-loose">
							+1 (604) 344-9882
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

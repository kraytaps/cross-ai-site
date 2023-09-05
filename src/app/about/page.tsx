import Navbar from "@/components/Navbar";
import Image from "next/image";

import GetEarlyAccessSection from "@/components/GetEarlyAccessSection";
import Footer from "@/components/Footer";
import GetStartedButton from "@/components/GetStartedButton";

import EllipseBlurGroup from "../../assets/ellipse-blur-group.png";
import EllipseBlur1 from "../../assets/ellipse-blur-1.png";
import Discussion from "../../assets/discussion.png";
import Whiteboard from "../../assets/whiteboard.png";
import Pinboard from "../../assets/pinboard.png";
import Laptop from "../../assets/laptop.png";
import Empowering from "../../assets/empowering-businesses.png";

export default function About() {
	return (
		<main className="flex flex-col w-full text-white-0">
			<Navbar />

			<section className="relative flex flex-col items-center min-h-screen px-10">
				<div className="flex flex-col items-center justify-center h-screen max-w-screen-xl min-h-screen py-10">
					<div className="flex flex-col items-center gap-4 max-w-screen-md">
						<div className="px-4 py-2 font-mono text-sm border-2 rounded-full border-purple-2 bg-black-1">
							<p className="text-transparent bg-clip-text bg-gradient-to-tr from-purple-pink-grad-0 to-purple-pink-grad-1">
								ABOUT US
							</p>
						</div>
						<h1 className="text-4xl text-center font-semibold md:text-5xl">
							Your trusted partners in AI-driven business
							transformation.
						</h1>
						<p className="font-medium text-center text-grey-0">
							The team led by Mr. Tony Chen and Mr. Tony Seno
							bring together an astounding 64 years of combined
							expertise in the technology sector. Their careers
							have spanned leadership roles in globally recognized
							corporations including Microsoft, Oracle, Cisco,
							IBM, Andersen Consulting, and Stratus Computer.
						</p>
						<GetStartedButton type="primary" />
					</div>

					<Image
						src={EllipseBlurGroup}
						className="absolute w-screen h-full left-0 right-0 bottom-0 top-0 object-cover -z-10 bg-no-repeat"
						alt=""
					/>
				</div>
			</section>

			<section className="relative flex flex-col items-center px-10">
				<div className="relative flex flex-col max-w-screen-xl py-10 items-center gap-20">
					<div className="flex flex-col items-center gap-4 max-w-screen-md">
						<div className="px-4 py-2 font-mono text-sm border-2 rounded-full border-purple-2 bg-black-1">
							<p className="text-transparent bg-clip-text bg-gradient-to-tr from-purple-pink-grad-0 to-purple-pink-grad-1">
								OUR MISSION
							</p>
						</div>
						<h1 className="text-4xl text-center font-semibold md:text-5xl">
							Our mission is to help businesses cross the AI
							frontier.
						</h1>
						<p className="font-medium text-center text-grey-0">
							Bridging the gap between your data and actionable
							insights, we empower you to transform low-quality,
							unstructured data into meaningful insights. More
							than just a tech company, we are your partners in
							navigating the rapidly evolving landscape of
							artificial intelligence.
						</p>
						<GetStartedButton type="primary" />
					</div>
				</div>
			</section>
			<section className="relative flex flex-col items-center w-full py-14 md:py-20">
				<div className="flex flex-col overflow-hidden items-center w-full">
					<div className="flex flex-row items-center w-[150%] md:w-[115%] gap-2 md:gap-14">
						<div className="flex w-[25%]">
							<Image src={Pinboard} alt="" />
						</div>
						<div className="flex w-[25%]">
							<Image src={Laptop} alt="" />
						</div>
						<div className="flex w-[25%]">
							<Image src={Empowering} alt="" />
						</div>
						<div className="flex w-[25%]">
							<Image src={Whiteboard} alt="" />
						</div>
						<div className="flex w-[25%]">
							<Image src={Discussion} alt="" />
						</div>
					</div>
				</div>
				<Image
					src={EllipseBlur1}
					className="absolute object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
					alt=""
				/>
			</section>

			<GetEarlyAccessSection />

			<Footer />
		</main>
	);
}

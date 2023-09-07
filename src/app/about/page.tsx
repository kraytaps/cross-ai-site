"use client";

import { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

import Navbar from "@/components/Navbar";
import Image from "next/image";

import GetEarlyAccessSection from "@/components/GetEarlyAccessSection";
import Footer from "@/components/Footer";
import GetStartedButton from "@/components/GetStartedButton";

import EllipseBlurGroup from "@/assets/ellipse-blur-group.png";
import EllipseBlur1 from "@/assets/ellipse-blur-1.png";
import Discussion from "@/assets/discussion.png";
import Whiteboard from "@/assets/whiteboard.png";
import Pinboard from "@/assets/pinboard.png";
import Laptop from "@/assets/laptop.png";
import Empowering from "@/assets/empowering-businesses.png";

export default function About() {
	const ref = useRef(null);
	let { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	function useParallax(
		value: MotionValue<number>,
		distance1: number,
		distance2: number
	) {
		return useTransform(
			scrollYProgress,
			[0, 1],
			[`${distance1}%`, `${distance2}%`]
		);
	}

	let yPinboard = useParallax(scrollYProgress, 0, -100);
	let yLaptop = useParallax(scrollYProgress, -20, 10);
	let yEmpowering = useParallax(scrollYProgress, 10, -50);
	let yWhiteboard = useParallax(scrollYProgress, -30, 10);
	let yDiscussion = useParallax(scrollYProgress, 50, -50);

	return (
		<main className="flex flex-col w-full text-sm text-white-0 md:text-base">
			<Navbar />

			<section className="relative flex flex-col items-center min-h-screen px-5 md:px-10">
				<div className="flex flex-col items-center justify-center h-screen max-w-screen-xl min-h-screen py-10">
					<div className="flex flex-col items-center max-w-screen-lg gap-5">
						<div className="px-4 py-2 font-mono text-sm border-2 rounded-full border-purple-2 bg-black-1">
							<p className="text-transparent bg-clip-text bg-gradient-to-tr from-purple-pink-grad-0 to-purple-pink-grad-1">
								ABOUT US
							</p>
						</div>
						<h1 className="text-3xl font-semibold text-center md:text-5xl">
							Your trusted partners in AI-driven business
							transformation.
						</h1>
						<p className="font-medium text-center text-grey-0">
							The team is led by Mr. Tony Chen and Mr. Tony Seno,
							who together bring an astounding 64 years of
							combined expertise in the technology sector. Their
							careers have spanned leadership roles in globally
							recognized corporations including Microsoft, Oracle,
							Cisco, IBM, Andersen Consulting, and Stratus
							Computer.
						</p>
						<GetStartedButton type="primary" />
					</div>

					<Image
						src={EllipseBlurGroup}
						className="absolute top-0 bottom-0 left-0 right-0 object-cover w-screen h-full bg-no-repeat -z-10"
						alt=""
					/>
				</div>
			</section>

			<section className="relative flex flex-col items-center px-5 md:px-10 lg:mb-20 xl:mb-30">
				<div className="relative flex flex-col items-center max-w-screen-xl gap-20 py-10">
					<div className="flex flex-col items-center max-w-screen-lg gap-5">
						<div className="px-4 py-2 font-mono text-sm border-2 rounded-full border-purple-2 bg-black-1">
							<p className="text-transparent bg-clip-text bg-gradient-to-tr from-purple-pink-grad-0 to-purple-pink-grad-1">
								OUR MISSION
							</p>
						</div>
						<h1 className="text-3xl font-semibold text-center md:text-5xl">
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
					</div>
				</div>
			</section>

			<section className="relative flex flex-col items-center w-full py-14 md:py-20 z-[1]">
				<div className="flex flex-col items-center overflow-x-clip">
					<div
						ref={ref}
						className="flex relative flex-row items-center w-[150%] md:w-[115%] gap-2 md:gap-14"
					>
						<motion.div
							style={{ y: yPinboard }}
							className="flex relative w-[25%]"
						>
							<Image
								src={Pinboard}
								alt=""
								loading="eager"
							/>
						</motion.div>
						<motion.div
							style={{ y: yLaptop }}
							className="flex relative w-[25%]"
						>
							<Image
								src={Laptop}
								alt=""
								loading="eager"
							/>
						</motion.div>
						<motion.div
							style={{ y: yEmpowering }}
							className="flex w-[25%]"
						>
							<Image
								src={Empowering}
								alt=""
								loading="eager"
							/>
						</motion.div>
						<motion.div
							style={{ y: yWhiteboard }}
							className="flex w-[25%]"
						>
							<Image
								src={Whiteboard}
								alt=""
								loading="eager"
							/>
						</motion.div>
						<motion.div
							style={{ y: yDiscussion }}
							className="flex w-[25%]"
						>
							<Image
								src={Discussion}
								alt=""
							/>
						</motion.div>
					</div>
					<Image
						src={EllipseBlur1}
						className="absolute object-cover transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -z-10"
						alt=""
					/>
				</div>
			</section>

			<GetEarlyAccessSection />

			<Footer />
		</main>
	);
}

"use client";

import GetStartedButton from "@/components/GetStartedButton";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import GetEarlyAccessSection from "@/components/GetEarlyAccessSection";
import Footer from "@/components/Footer";

import Scene from "@/components/Scene";
import DataChaosImg from "@/assets/data-chaos.png";
import EllipseBlur1 from "@/assets/ellipse-blur-1.png";
import EllipseBlurGroup from "@/assets/ellipse-blur-group.png";

export default function Home() {
	return (
		<main className="flex flex-col w-full text-sm text-white-0 md:text-base">
			<Navbar />

			<section className="relative flex flex-col items-center min-h-screen px-5 md:px-10">
				<div className="flex flex-col-reverse items-center justify-center h-screen max-w-screen-xl min-h-screen py-10 md:flex-row md:justify-between">
					<div className="flex flex-col items-center md:w-[50%] md:items-start gap-5">
						<h1 className="text-3xl font-semibold text-center md:text-5xl md:text-left">
							We transform businesses by leading them through the{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-b from-white-1 to-white-3">
								AI frontier.
							</span>
						</h1>
						<p className="font-medium text-center text-grey-0 md:text-left">
							Cross AI bridges the gap between your data and
							actionable insights. We help you harness the power
							of AI to make your business more efficient and
							competitive.
						</p>
						<GetStartedButton
							type="primary"
							text="Get early access"
						/>
					</div>
					<div className="flex flex-col h-full md:w-[50%]">
						<Scene />
					</div>
				</div>
				<Image
					src={EllipseBlurGroup}
					className="absolute bottom-0 h-full md:top-auto md:bottom-auto md:right-0 -z-10"
					alt=""
				/>
			</section>

			<section className="relative flex flex-col items-center px-5 md:px-10">
				<div className="flex flex-col items-center justify-center max-w-screen-xl max-h-screen gap-10 py-20 md:flex-row md:justify-between">
					<div className="flex flex-col items-start gap-5 md:w-[35%]">
						<div className="px-4 py-2 font-mono text-sm border-2 rounded-full border-purple-2 bg-black-1">
							<p className="text-transparent bg-clip-text bg-gradient-to-tr from-purple-pink-grad-0 to-purple-pink-grad-1">
								[ALPHA] IRIS
							</p>
						</div>
						<h1 className="text-3xl font-semibold md:text-5xl">
							Transforming Data Chaos Into Clarity
						</h1>
						<p className="font-medium text-left text-grey-0 md:text-left">
							In the modern era of data-driven decision making,
							many grapple with vast amounts of unstructured data.
							Extracting meaningful insights from heaps of paper
							and digital records can be daunting. Overcoming the
							absence of specific AI tools adds to these
							challenges.
						</p>
					</div>
					<div className="md:w-[65%]">
						<Image
							src={DataChaosImg}
							className="object-cover"
							alt="data chaos data aggregation"
						/>
					</div>
				</div>
				<Image
					src={EllipseBlur1}
					className="absolute bottom-0 h-full md:bottom-auto md:right-[10%] -z-10"
					alt=""
				/>
			</section>

			<GetEarlyAccessSection />

			<Footer />
		</main>
	);
}

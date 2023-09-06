import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

import EllipseBlurGroup from "../../assets/ellipse-blur-group.png";
import XLogoHue from "../../assets/x-logo-hue.jpg";

export default function GetStarted() {
	return (
		<main className="flex flex-col w-full text-sm text-white-0 md:text-base">
			<Navbar />

			<section className="relative flex flex-col items-center min-h-screen px-5 py-12 md:px-10 md:py-0">
				<div className="flex flex-col items-center w-full max-w-screen-xl min-h-screen gap-5 md:flex-row pt-14 md:py-40">
					<div className="flex flex-col box-border border-2 border-grey-1 md:w-[60%] p-10 gap-4 rounded-xl items-start">
						<h1 className="text-2xl font-semibold">
							Sign up for launch news and early access.
						</h1>
						<p className="text-grey-0">
							Be first in line to transform your business data and
							develop powerful insights that will accelerate
							business growth.
						</p>

						<div className="w-full my-4 border-b border-gray-900/10">
							<div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
								<div className="col-span-6 md:col-span-3">
									<label
										htmlFor="first-name"
										className="block text-sm font-medium leading-6"
									>
										First name
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="first-name"
											id="first-name"
											autoComplete="given-name"
											placeholder="Jane"
											className="bg-transparent text-sm p-2 block w-full rounded-md border-grey-2 border-2 py-1.5 placeholder:text-grey-0 focus:ring-2 focus:ring-inset focus:ring-offset-purple-0"
										/>
									</div>
								</div>

								<div className="col-span-6 md:col-span-3">
									<label
										htmlFor="last-name"
										className="block text-sm font-medium leading-6"
									>
										Last name
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="last-name"
											id="last-name"
											autoComplete="family-name"
											placeholder="Doe"
											className="bg-transparent text-sm p-2 block w-full rounded-md border-grey-2 border-2 py-1.5 placeholder:text-grey-0 focus:ring-2 focus:ring-inset focus:ring-offset-purple-0"
										/>
									</div>
								</div>

								<div className="col-span-6 md:col-span-3">
									<label
										htmlFor="company-name"
										className="block text-sm font-medium leading-6"
									>
										Company name
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="company-name"
											id="company-name"
											autoComplete="company-name"
											placeholder="Company"
											className="bg-transparent text-sm p-2 block w-full rounded-md border-grey-2 border-2 py-1.5 placeholder:text-grey-0 focus:ring-2 focus:ring-inset focus:ring-offset-purple-0"
										/>
									</div>
								</div>

								<div className="col-span-6 md:col-span-3">
									<label
										htmlFor="phone-number"
										className="block text-sm font-medium leading-6"
									>
										Phone number
									</label>
									<div className="mt-2">
										<input
											type="tel"
											name="phone-number"
											id="phone-number"
											autoComplete="phone-number"
											placeholder="+1 (777) 777-7777"
											pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
											className="bg-transparent text-sm p-2 block w-full rounded-md border-grey-2 border-2 py-1.5 placeholder:text-grey-0 focus:ring-2 focus:ring-inset focus:ring-offset-purple-0"
										/>
									</div>
								</div>

								<div className="col-span-6">
									<label
										htmlFor="email"
										className="block text-sm font-medium leading-6"
									>
										Email address
									</label>
									<div className="mt-2">
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											placeholder="janedoe@gmail.com"
											className="bg-transparent text-sm p-2 block w-full rounded-md border-grey-2 border-2 py-1.5 placeholder:text-grey-0 focus:ring-2 focus:ring-inset focus:ring-offset-purple-0"
										/>
									</div>
								</div>
							</div>
						</div>

						<Link href="/getstarted">
							<button
								className={`px-4 py-2.5 rounded-md bg-purple-0 font-semibold hover:bg-purple-0-hover hover:cursor-pointer transition-all duration-300`}
							>
								Sign up
							</button>
						</Link>
					</div>

					<div className="flex flex-row items-center overflow-hidden max-h-[40vh] md:h-auto md:max-h-none md:w-[40%] rounded-xl md:self-stretch lg:self-center">
						<Image
							src={XLogoHue}
							className="object-cover w-full h-full "
							alt=""
						/>
					</div>
					<Image
						src={EllipseBlurGroup}
						className="absolute bottom-0 object-cover h-full opacity-50 md:top-auto md:bottom-auto md:right-0 -z-10"
						alt=""
					/>
				</div>
			</section>

			<Footer />
		</main>
	);
}

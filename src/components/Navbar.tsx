import CrossLogo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import GetStartedButton from "./GetStartedButton";

export default function Navbar() {
	const links = [{ path: "/about", label: "About" }];

	return (
		<div className="fixed z-50 flex flex-col items-center min-w-full px-5 md:px-10">
			<div className="flex flex-row justify-between w-full max-w-screen-xl py-5 md:py-10">
				<Link
					href="/"
					className="flex flex-col justify-center"
				>
					<Image
						src={CrossLogo}
						alt=""
					/>
				</Link>
				<div className="flex flex-row items-center gap-8 md:gap-16">
					{links.map((link, index) => (
						<Link
							key={index}
							href={link.path}
							className="transition-all text-grey-0 hover:text-white-0"
						>
							{link.label}
						</Link>
					))}
					<GetStartedButton type="secondary" />
				</div>
			</div>
		</div>
	);
}

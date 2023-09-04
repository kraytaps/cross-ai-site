import CrossLogo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import GetStartedButton from "./GetStartedButton";

export default function Navbar() {
	const links = [
		{ path: "/about", label: "About" },
		{ path: "/contact", label: "Contact" },
	];

	return (
		<div className="fixed flex flex-col items-center min-w-full px-10">
			<div className="flex flex-row justify-between w-full max-w-screen-xl py-10">
				<Link href="/">
					<Image src={CrossLogo} alt="" />
				</Link>
				<div className="flex-row items-center hidden gap-16 md:flex">
					{links.map((link, index) => (
						<Link key={index} href={link.path} className="">
							{link.label}
						</Link>
					))}
					<GetStartedButton type="secondary" />
				</div>
			</div>
		</div>
	);
}

import Link from "next/link";

type GetStartedButtonProps = {
	type: "primary" | "secondary";
	text?: string;
};

export default function GetStartedButton({
	type,
	text,
}: GetStartedButtonProps) {
	const bgColor = type === "primary" ? "bg-purple-0" : "bg-black-0";
	const hoverColor =
		type === "primary"
			? "hover:bg-purple-0-hover"
			: "hover:bg-black-0-hover";

	return (
		<Link href="/getstarted">
			<button
				className={`px-4 py-2.5 rounded-md ${bgColor} font-semibold ${hoverColor} hover:cursor-pointer transition-all duration-300`}
			>
				{text ? text : "Get started"}
			</button>
		</Link>
	);
}

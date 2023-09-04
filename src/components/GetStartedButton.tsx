type GetStartedButtonProps = {
	type: "primary" | "secondary";
	text?: string;
};

export default function GetStartedButton({
	type,
	text,
}: GetStartedButtonProps) {
	const bgColor = type === "primary" ? "bg-purple-0" : "bg-black-0";
	return (
		<button className={`px-4 py-2.5 rounded-md ${bgColor} font-semibold`}>
			{text ? text : "Get started"}
		</button>
	);
}

import GetStartedButton from "./GetStartedButton";

export default function GetEarlyAccessSection() {
	return (
		<div className="relative flex flex-col items-center px-10">
			<div className="flex flex-col items-center justify-center w-full max-w-screen-xl gap-10 py-20 border-t-2 border-grey-1">
				<div className="flex flex-col items-center max-w-screen-md gap-4">
					<h2 className="text-2xl font-semibold text-center md:text-2xl md:text-left">
						Get Early Access
					</h2>
					<p className="font-medium text-center text-grey-0">
						Cross AI bridges the gap between your data and
						actionable insights. We help you harness the power of AI
						to make your business more efficient and competitive.
					</p>
					<GetStartedButton type="primary" text="Get early access" />
				</div>
			</div>
		</div>
	);
}

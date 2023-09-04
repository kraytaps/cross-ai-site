export default function Footer() {
	return (
		<div className="relative flex flex-col items-center px-10">
			<div className="flex flex-row items-center justify-between w-full max-w-screen-xl gap-10 py-10 border-t-2 border-grey-1 text-grey-0">
				<p>© Cross AI 2023</p>
				<div className="flex-row hidden gap-5 md:flex">
					<p>Privacy Policy</p>
					<p>Terms & Conditions</p>
				</div>
			</div>
		</div>
	);
}

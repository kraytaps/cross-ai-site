import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Cross AI - Bridge the Gap Between Data and Actionable Insights",
	description:
		"Cross AI bridges the gap between your data and actionable insights. We lead your business through the AI frontier and transform it by harnessing the power of AI.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}

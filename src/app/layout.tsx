import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import openGraphImg from "@/assets/openGraphImg.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Cross AI - Bridge the Gap Between Your Data and Actionable Insights",
	description:
		"Cross AI bridges the gap between your data and actionable insights. We lead your business through the AI frontier and transform it by harnessing the power of AI.",
	openGraph: {
		type: "website",
		url: "https://xcross.ai",
		title: "Cross AI - Bridge the Gap Between Your Data and Actionable Insights",
		description:
			"Our tools aim to bridge the gap between your data and actionable insights. Our platform is designed to lead your business through the AI frontier and transform it by harnessing the power of AI.",
		siteName: "Cross AI",
		images: [
			{
				url: "@/assets/openGraphImg.jpg",
			},
		],
	},
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

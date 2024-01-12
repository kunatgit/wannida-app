// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import * as Constant from "@/constant";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;

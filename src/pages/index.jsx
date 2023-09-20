import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import { useSession, signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import axios from "axios";

import "../styles/globals.css";
import "../styles/test.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ faqData }) {
	const { data: session } = useSession();
	// const faqsAttr = faqData.map((faqPost) => faqPost.attributes);

	return (
		<>
			<div className="main_container">
				<h1>Civiconnect NextJS Template</h1>
				<Image src="civi.svg" width={600} height={600} alt="Civiconnect Logo"></Image>
				<FontAwesomeIcon icon={faMeteor} color="white" size="2x" />
				<Link href="https://fontawesome.com/search?o=r&m=free" target="_blank" className="bg-zinc-700 px-3 py-1 rounded my-3">
					Font Awesome Icons Link
				</Link>
				<h2>You are: {session ? "signed in" : "signed out"}</h2>
				<button onClick={signOut} className="bg-zinc-700 px-3 py-1 rounded my-3">Sign Out</button>

				<div>
					<br></br>
					<h1>Response from strapi server:</h1>
					{/* {faqsAttr.map((faqPost) => {
						return (
							<p>
								{faqPost.question} - {faqPost.answer}
							</p>
						);
					})} */}
				</div>
			</div>

			<style jsx>{`
				.main_container {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					height: 100vh;
					width: 100vw;
				}
			`}</style>
		</>
	);
}

// export async function getServerSideProps() {
// 	const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/faqs?populate=*`);
// 	return {
// 		props: {
// 			faqData: response.data.data,
// 		},
// 	};
// }

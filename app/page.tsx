import { Container } from "../components/container"
import Image from "next/image";

export default function Dlite_Homepage() {
  return (
    <div>
			<header>
				<Container>This is the header section</Container>
			</header>
			<main>
				<Container>Dlite homepage</Container>
			</main>
			<footer>
				<Container>This is the footer section</Container>
			</footer>
		</div>
  );
}
import Link from "next/link";
import { Logo } from "./logo";

export const Header = () => {
  return (
  	<header>
			<Link href="/">
				<Logo /> Maraya
			</Link>
		</header>
  );
};
// react
import { useContext } from "react";
import { TopBarContext } from "../../../../context/TopBarContext";

// styles
import logoComponentStyles from "./LogoComponent.module.css";

// components
import { AnimatePresenceComponent } from "../../../reusable/AnimatePresenceComponent";

// next components
import Image from "next/image";
import Link from "next/link";

export function LogoComponent() {
  // context
  const { searchState } = useContext(TopBarContext);

  return (
    <AnimatePresenceComponent presence={!searchState}>
      <Link href="/">
        <div id={logoComponentStyles.logoContainer}>
          <Image src="/images/logo.png" layout="fill" alt="Logo" />
        </div>
      </Link>
    </AnimatePresenceComponent>
  );
}

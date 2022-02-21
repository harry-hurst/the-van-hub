// components
import Shop from "../../components/Shop";

// next components
import { useRouter } from "next/router";

export default function FirstPositionDomain() {
  // router used for getting data out of the url bar
  const router = useRouter();
  const { FirstPositionDomain } = router.query;

  if (FirstPositionDomain === "shop") {
    return <Shop />;
  } else if (FirstPositionDomain === "about") {
    return <span></span>;
  } else {
    return null;
  }
}

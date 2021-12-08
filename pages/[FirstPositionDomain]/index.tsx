// next components
import { useRouter } from "next/router";

export default function Shop() {
  // router used for getting data out of the url bar
  const router = useRouter();
  const { FirstPositionDomain } = router.query;

  return (
    <div className="container" style={{ border: "1px solid orange" }}>
      {FirstPositionDomain}
    </div>
  );
}

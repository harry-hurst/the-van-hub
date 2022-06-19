// components
import Shop from "../../components/Shop";
import ErrorPage from "../error_page";

// next components
import { useRouter } from "next/router";
import Head from "next/head";

const FirstPositionDomain = () => {
  const router = useRouter();

  const area = router.query.FirstPositionDomain;

  return (
    <>
      <Head>
        {typeof area === "string" && (
          <title>The Van Hub - {area.slice(0, 1).toUpperCase() + area.slice(1)}</title>
        )}
      </Head>
      {returnPageContent(area)}
    </>
  );
}

export default FirstPositionDomain;

const returnPageContent = (area: string | string[] | undefined) => {
  switch (area) {
    case "shop":
      return <Shop />;

    default:
      return <ErrorPage />;
  }
};

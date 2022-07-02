// components
import ProductSlider from "../../components/Reusable/ProductSlider";
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
          <title>
            The Van Hub - {area.slice(0, 1).toUpperCase() + area.slice(1)}
          </title>
        )}
      </Head>
      {returnPageContent(area)}
    </>
  );
};

export default FirstPositionDomain;

const returnPageContent = (area: string | string[] | undefined) => {
  switch (area) {
    case "shop":
      return (
        <>
        <div className="container">
          <h2 className="nun-sans">Main Products</h2>
        </div>
          <ProductSlider />
        </>
      );

    default:
      return <ErrorPage />;
  }
};

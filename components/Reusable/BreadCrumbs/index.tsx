// styles
import breadcrumbsStyles from "./BreadCrumbs.module.css";

// next components
import Link from "next/link";

export default function BreadCrumb(props: {
  productTitle: string | string[] | undefined;
}) {
  return (
    <nav aria-label="breadcrumb" id={breadcrumbsStyles.container}>
      <ol className="breadcrumb" id={breadcrumbsStyles.list}>
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>

        <li className="breadcrumb-item active" aria-current="page">
          {props.productTitle}
        </li>
      </ol>
    </nav>
  );
}

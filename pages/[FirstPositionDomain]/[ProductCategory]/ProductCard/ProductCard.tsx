// styles
import productCardStyles from "./ProductCard.module.css";

// next components
import Link from "next/link";
import Image from "next/dist/client/image";

export default function ProductCard(props: {
  category: string | string[] | undefined;
  title: string;
  id: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  price: string;
}) {
  return (
    <Link href={`/${props.category}/${props.title}?productId=${props.id}`}>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className={`${productCardStyles.productCard} p-3 `}>
          <span>{props.title}</span>
          <Image
            src={props.imgSrc}
            width={props.imgWidth}
            height={props.imgHeight}
            alt="Product photo"
          />
          <span>£{props.price}</span>
        </div>
      </div>
    </Link>
  );
}

// styles
import sliderItemStyles from "./SliderItem.module.css";

// next components
import Link from "next/link";
import Image from "next/image";

export default function SliderItem(props: {
  handle: string;
  id: string;
  title: string;
  availableForSale: boolean;
  imgSrc: string;
  price: string;
}) {
  return (
    <div className="border-end p-3">
      <Link href={`/shop/all-batteries/${props.handle}?productId=${props.id}`}>
        <a>
          <div id={sliderItemStyles.imageContainer} className="mb-2">
            <Image
              src={props.imgSrc}
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
        </a>
      </Link>
      <Link href={`/shop/all-batteries/${props.handle}?productId=${props.id}`}>
        <a>
          <div id={sliderItemStyles.descriptionContainer}>
            <span id={sliderItemStyles.title} className="mb-2">
              {props.title}
            </span>
            <span id={sliderItemStyles.price} className="text-dark">
              £{props.price}
            </span>
            {props.availableForSale ? (
              <span id={sliderItemStyles.inStock} className="text-success">
                <i className="bi bi-check2-circle"> </i>
                in stock
              </span>
            ) : (
              <span id={sliderItemStyles.noStock} className="text-danger">
                <i className="bi bi-x-circle"> </i>
                out of stock
              </span>
            )}
          </div>
        </a>
      </Link>
    </div>
  );
}

// styles
import layoutStyles from "./Layout.module.css";

// react hooks
import { useEffect, useRef } from "react";

// redux
import { clearActiveMenu } from "../../state/activeMenuSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";

// components
import Header from "./Header";
import Footer from "./Footer";
import ShopifyContext from "../../context/Shopify";
import ScreenSizeContext from "../../context/ScreenSize";

// modules
import { AnimateSharedLayout } from "framer-motion";

const Layout = (props: { children: React.ReactNode }) => {
  // activeMenu determines which menu component will be displayed within the multi-use "Modal" component:
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  // references for click away listener
  const modalRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const basketRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  // click away function:
  const handleClickAway = (event: { target: any }) => {
    // if there is an active menu i.e menu is open:
    if (activeMenu !== null) {
      // to prevent "Object is possibly 'null' " error:

      // if click is outside of modal, burger icon, search bar and basket icon:
      if (
        !(
          (modalRef.current !== null &&
            modalRef.current.contains(event.target)) ||
          (burgerRef.current !== null &&
            burgerRef.current.contains(event.target)) ||
          (searchBoxRef.current !== null &&
            searchBoxRef.current.contains(event.target)) ||
          (basketRef.current !== null &&
            basketRef.current.contains(event.target)) ||
          (searchBarRef.current !== null &&
            searchBarRef.current.contains(event.target))
        )
      ) {
        // set activeMenu to 'null':
        dispatch(clearActiveMenu());
      }
    }
  };

  // componentWillUnmount()
  useEffect(() => {
    document.addEventListener("click", handleClickAway, true);
    return () => {
      document.removeEventListener("click", handleClickAway, true);
    };
  });

  return (
    <main>
      <ShopifyContext>
        <ScreenSizeContext>
          <div id={layoutStyles.mainContentWrapper}>
            <Header
              burgerRef={burgerRef}
              searchBoxRef={searchBoxRef}
              basketRef={basketRef}
              modalRef={modalRef}
              searchBarRef={searchBarRef}
            />
            <AnimateSharedLayout>
              <div>{props.children}</div>
              <Footer />
            </AnimateSharedLayout>
          </div>
        </ScreenSizeContext>
      </ShopifyContext>
    </main>
  );
};

export default Layout;

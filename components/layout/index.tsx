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
import Footer from "../Footer";
import ShopifyContext from "../../context/Shopify";
import ScreenSizeContext from "../../context/ScreenSize";

// modules
import { AnimateSharedLayout } from "framer-motion";

const Layout = (props: { children: React.ReactNode }) => {
  // activeMenu determines which menu component will be displayed within the multi-use "Modal" component:
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  // click away listener
  let modalRef = useRef<HTMLDivElement>(null);
  let burgerRef = useRef<HTMLDivElement>(null);
  let searchBarRef = useRef<HTMLDivElement>(null);
  let basketRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const handleClickAway = (event: { target: any }) => {
    // if there is an active menu i.e menu is open:
    if (activeMenu !== null) {
      // to prevent " Object is possibly 'null' " error:
      if (
        modalRef.current !== null &&
        burgerRef.current !== null &&
        searchBarRef.current !== null &&
        basketRef.current !== null
      ) {
        // if click is outside of modal, burger icon, search bar and basket icon:
        if (
          !(
            modalRef.current.contains(event.target) ||
            burgerRef.current.contains(event.target) ||
            searchBarRef.current.contains(event.target) ||
            basketRef.current.contains(event.target)
          )
        ) {
          // set activeMenu to 'null':
          dispatch(clearActiveMenu());
        }
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
              searchRef={searchBarRef}
              basketRef={basketRef}
              modalRef={modalRef}
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

import footerStyles from "./Footer.module.css";

export default function Footer() {
  return (
    <div id={footerStyles.footerContainer}>
      <div id={footerStyles.footerSectionOne}></div>
      <div id={footerStyles.footerSectionTwo}>
        © 2020, The Van Hub Ltd. All Rights Reserved.
      </div>
    </div>
  );
}

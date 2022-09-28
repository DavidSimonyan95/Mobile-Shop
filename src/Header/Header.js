import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderTop from "./HeaderTop/HeaderTop";
import s from "../Header/Header.module.scss";
import { useTranslation } from "../context/languageContext";

function Header() {
  return (
    <div className={s.headerSection}>
      <HeaderTop />
      <HeaderBottom />
    </div>
  );
}
export default Header;

import { All, HeaderBhutans } from "../assets/StylesPages/Header";
import Fundo from "../assets/Styles/images/Fundo.png";

export default function Header() {
  return (
    <All>
      <HeaderBhutans>
        <img src={Fundo} alt="" />
      </HeaderBhutans>
    </All>
  );
}

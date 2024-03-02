import Fundo from "../assets/images/Fundo.png";
import { HeaderContainer, HeaderBhutans } from "../assets/Styles/Header";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderBhutans>
        <img src={Fundo} alt="" />
      </HeaderBhutans>
    </HeaderContainer>
  );
}

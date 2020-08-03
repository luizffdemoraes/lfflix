import React from "react";
import { FooterBase } from "./styles";
import Img from "../../assets/img/lfflix_footer.png";

function Footer() {
  return (
    <FooterBase>
      <img src={Img} alt="logolfflix" />
      <p>
        Orgulhosamente criado durante a{" "}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;

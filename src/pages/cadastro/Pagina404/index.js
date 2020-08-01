import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = styled.main`
  background-color: #70c5ce;
  margin-top: -94px;
  min-height: 100vh;
  color: whitesmoke;
`;

function Pagina404() {
  return (
    <Main>
      <h2 style={{ textAlign: "center", top: "78px", position: "relative" }}>
        404 - Página não encontrada
      </h2>
      <iframe
        title="game"
        src="https://mariosouto.com/flappy-bird-devsoutinho/"
        width="340"
        height="600"
        overflow="hidden"
        scrolling="no"
        frameborder="0"
      ></iframe>
      <Link to="/">
        <h3 style={{ textAlign: "center", top: "-78px", position: "relative" }}>
          Ir para home
        </h3>
      </Link>
    </Main>
  );
}

export default Pagina404;

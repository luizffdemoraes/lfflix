import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import useForm from "../../../hooks/useForm";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import videosRepository from "../../../repositories/videos";
import categoriasRepository from "../../../repositories/categorias";

import { StyledLink, ButtonWrapper } from "../styles.js";

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: "",
    url: "",
    categoria: "",
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("Video Cadastrado com sucesso!!!!");
        }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <ButtonWrapper>
          <Button>Cadastrar</Button>

          <StyledLink to="/cadastro/categoria">Cadastrar Categoria</StyledLink>
        </ButtonWrapper>
      </form>

      <br />
      <br />
    </PageDefault>
  );
}

export default CadastroVideo;

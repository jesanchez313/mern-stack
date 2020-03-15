import React from "react";
import { Link } from "react-router-dom";

const Create: React.FC = () => {
  return (
    <>
      <h1>Crear pagina</h1>
      <Link to="/">
        <a>Ir a crear</a>
      </Link>
    </>
  );
};

export default Create;

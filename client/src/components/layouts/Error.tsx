import React from "react";
import { IErrorComponent } from "config/interfaces";

const Error: React.FC<IErrorComponent> = ({
  textError = "Error to get data!"
}) => {
  return (
    <div className="container">
      <div className="alert alert-danger mt-5" role="alert">
        {textError}
      </div>
    </div>
  );
};

export default Error;

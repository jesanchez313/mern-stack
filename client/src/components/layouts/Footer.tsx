import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer text-muted">
      <div className="container">
        <p className="text-center">
          Created by{" "}
          <a
            href="https://jesanchez313.gitlab.io/jeferson-sanchez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ©JefersonSanchez
          </a>
          <br></br>
          Made with <i className="fab fa-bootstrap"></i> Bootstrap
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { IForm } from "config/interfaces";

const Form: React.FC<IForm> = ({
  defaultName,
  defaultDescription,
  defaultPictureHelp
}) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          defaultValue={defaultName}
          className="form-control"
          id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          className="form-control"
          id="description"
          defaultValue={defaultDescription}
        ></textarea>
      </div>
      <div className="form-group">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupFileAddon01">
              <i className="fas fa-upload"></i>
            </span>
          </div>
          <div className="custom-file">
            <input
              type="file"
              name="picture"
              className="custom-file-input"
              id="picture"
            />
            <label className="custom-file-label" htmlFor="picture">
              Choose file
            </label>
          </div>
          <small id="emailHelp" className="form-text text-muted">
            {defaultPictureHelp
              ? defaultPictureHelp
              : "If you do not add an image, the profile will take the default photo from github."}
          </small>
        </div>
      </div>
    </>
  );
};

export default Form;

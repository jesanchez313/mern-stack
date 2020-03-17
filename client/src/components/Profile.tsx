import React, { useContext, useState } from "react";
import { IProfile } from "config/interfaces";
import axios from "axios";
import { Store } from "global/Store";
import Form from "components/Form";
import Swal from "sweetalert2";

const Profile: React.FC<IProfile> = ({
  _id,
  name,
  description,
  picture,
  username,
  refetch
}) => {
  const {
    state: { user }
  } = useContext(Store);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleUpdate = () => {
    const form: any = document.querySelector("#form-update-" + _id);
    const formData: any = new FormData(form);

    if (validateForm(formData)) {
      const file = formData.get("picture");
      const fileName = file.name;

      formData.set("username", username);
      if (!fileName) {
        formData.set("picture", picture);
      }

      axios({
        method: "put",
        url: "/api/profiles/" + _id,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
      }).then(() => {
        Swal.fire("Update Profile", "Saved successfully", "success");
        refetch();
      });
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then((result: any) => {
      if (result.value) {
        axios({
          method: "delete",
          url: "/api/profiles/" + _id
        }).then(() => {
          refetch();
        });
      }
    });
  };

  const validateForm = (formData: any): boolean => {
    if (formData.get("name") === "") {
      Swal.fire("Validate form", "Name is required", "warning");
      return false;
    }

    if (formData.get("description") === "") {
      Swal.fire("Validate form", "Description is required", "warning");
      return false;
    }

    return true;
  };

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img className="img-responsive" src={picture} alt="profile" />
        <div className="card-body">
          <form encType="multipart/form-data" id={"form-update-" + _id}>
            {showEditForm ? (
              <Form
                defaultName={name}
                defaultDescription={description}
                defaultPictureHelp="If you do not add an image, the profile will take the default."
              ></Form>
            ) : (
              <>
                <h1>{name}</h1>
                <p className="card-text">{description}</p>
              </>
            )}

            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group btn-group-profiles">
                {user && user.username === username && (
                  <>
                    {showEditForm ? (
                      <button
                        onClick={handleUpdate}
                        type="button"
                        className="btn btn-sm btn-success"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => setShowEditForm(true)}
                        type="button"
                        className="btn btn-sm btn-info"
                      >
                        Edit <i className="fas fa-edit"></i>
                      </button>
                    )}

                    <button
                      onClick={handleDelete}
                      type="button"
                      className="btn btn-sm btn-danger"
                    >
                      Delete <i className="fas fa-trash"></i>
                    </button>
                  </>
                )}
              </div>
              <small className="text-muted">
                {username} <i className="fas fa-user"></i>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

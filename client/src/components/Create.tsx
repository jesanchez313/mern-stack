import React, { useEffect, useContext } from "react";
import useAxios from "axios-hooks";
import axios from "axios";
import Loading from "components/layouts/Loading";
import Error from "components/layouts/Error";
import { Store } from "global/Store";
import useRouter from "useRouter";
import Form from "components/Form";
import Swal from "sweetalert2";

const Create: React.FC = () => {
  const { dispatch } = useContext(Store);
  const { history } = useRouter();

  const [{ data, loading, error }] = useAxios("/auth/profile");

  useEffect(() => {
    if (data.message === "no data") {
      window.localStorage.removeItem("creating");
      window.localStorage.removeItem("user");
      window.location.href = "/";
    }

    dispatch({ type: "SAVE_USER", payload: data });
    window.localStorage.setItem("user", JSON.stringify(data));
  }, [data, dispatch]);

  const handleSubmit = () => {
    const form: any = document.querySelector("#form-create");
    const formData: any = new FormData(form);

    if (validateForm(formData)) {
      const file = formData.get("picture");
      const fileName = file.name;

      formData.set("username", data.username);
      if (!fileName) {
        formData.set("picture", data.photos[0].value);
      }

      axios({
        method: "post",
        url: "/api/profiles",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
      }).then(() => {
        window.localStorage.removeItem("creating");
        history.push("/");
      });
    }
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

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="container">
      <div className="form-create">
        <form encType="multipart/form-data" id="form-create">
          <div className="form-group text-center font-weight-bold d-flex flex-column align-items-center">
            {data.username}
            <img width="120" src={data.photos[0].value} alt="avatar github" />
          </div>
          <Form></Form>
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-block btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;

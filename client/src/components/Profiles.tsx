import React from "react";
import useAxios from "axios-hooks";
import Loading from "components/layouts/Loading";
import Error from "components/layouts/Error";
import Profile from "components/Profile";
import { IProfile } from "config/interfaces";

const Profiles: React.FC = () => {
  const [{ data, loading, error }, refetch] = useAxios("/api/profiles");

  const handleCreate = () => {
    window.localStorage.setItem("creating", "profile");
    window.location.href = "/auth/github";
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="container">
      {data.length === 0 && (
        <section className="jumbotron text-center">
          <div className="container">
            <h1>No profiles created</h1>
            <p className="lead text-muted">
              No profiles created, do you want to be the first?
            </p>
            <p>
              <button onClick={handleCreate} className="btn btn-primary my-2">
                Create profile <i className="fas fa-id-badge"></i>
              </button>
            </p>
          </div>
        </section>
      )}
      {data.length > 0 && (
        <>
          <div className="d-flex mb-3 w-100 justify-content-center">
            <button onClick={handleCreate} className="btn btn-primary btn-lg">
              Create Profile <i className="fas fa-id-badge"></i>
            </button>
          </div>
          <div className="row">
            {data.length > 0 &&
              [...data].map((profile: IProfile) => (
                <Profile
                  _id={profile._id}
                  name={profile.name}
                  description={profile.description}
                  picture={profile.picture}
                  key={profile._id}
                  refetch={refetch}
                  username={profile.username}
                ></Profile>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Profiles;

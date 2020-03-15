import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("/api/profiles")
        .then(response => response.json())
        .then(response => {
          setProfiles(response);
        })
        .catch(() => {
          console.log("error");
        });
    };
    fetchData();
  }, []);

  const handleCreate = async () => {
    await fetch("/api/profiles", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "helloreact",
        description: "d4da22ee9d210bab31d1c3ef8b3674a6"
      })
    });
  };
  return (
    <>
      <h1>test de prueba</h1>
      <div>
        {profiles &&
          profiles.map((profile: any) => (
            <>
              <h2>{profile.name}</h2>
              <br></br>
              <img src={profile.picture}></img>
            </>
          ))}
      </div>
      <button onClick={() => handleCreate()}>agregar</button>
      <Link to="/create">
        <a>Ir a crear</a>
      </Link>
      <br></br>
      <a href="auth/github">github</a>
      <br></br>
      <a href="auth/logout?returnTo=/">logout</a>
    </>
  );
};

export default Home;

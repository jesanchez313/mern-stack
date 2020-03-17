import React, { useEffect } from "react";
import Profiles from "components/Profiles";
import Layout from "components/layouts/Layout";
import useRouter from "useRouter";

const Home: React.FC = () => {
  const { history } = useRouter();

  useEffect(() => {
    if (window.localStorage.getItem("creating") === "profile") {
      history.push("/create");
    }
  }, [history]);

  return (
    <>
      <Layout>
        <Profiles />
      </Layout>
    </>
  );
};

export default Home;

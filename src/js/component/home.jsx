import React from "react";

//include images into your bundle

import List from "/workspace/react-hello/src/js/component/ToDoList.jsx";
import Layout from "./Layout.jsx";
import Header from "./Header.jsx";


//create your first component
const Home = () => {
  return (
    <Layout>
      <Header />
      <List />
    </Layout>
  );
};

export default Home;

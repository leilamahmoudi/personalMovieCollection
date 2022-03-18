import React, { useEffect } from "react";
import axios from "axios";
import "./homeContainer.css";
const baseUrl = "https://d19d5.mocklab.io";

const HomeContainer = () => {
  useEffect(async () => {
    const contact = await axios({
      method: "get",
      url: `${baseUrl}/v1/contacts`,
    });
    console.log(contact);
  }, []);
  return (
    <div className="Home">
      <div className="container">HELLO Home</div>
    </div>
  );
};
export default HomeContainer;

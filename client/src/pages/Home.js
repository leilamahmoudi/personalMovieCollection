import React from "react";
import HomeContainer from "../components/home/HomeContainer";
import PageTemplate from "../components/pageTemplate/PageTemplate";

export default function Home() {
  return (
    <PageTemplate className="home-page">
      <HomeContainer />
    </PageTemplate>
  );
}

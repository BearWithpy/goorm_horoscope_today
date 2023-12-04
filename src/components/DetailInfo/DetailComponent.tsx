import Card from "components/Card/Card";
import DetailCard from "components/Card/DetailCard/Hands1/DetailCard";
import Hands2 from "components/Card/DetailCard/Hands2/Hands2";
import Hands3 from "components/Card/DetailCard/Hands3/Hands3";
import Hands4 from "components/Card/DetailCard/Hands4/Hands4";
import Hands5 from "components/Card/DetailCard/Hands5/Hands5";
import React from "react";
import { useParams } from "react-router-dom";

const DetailComponent = () => {
  const { id } = useParams();

  const getHandsComponent = (id: string) => {
    switch (id) {
      case "1":
        console.log(1);
        return <DetailCard />;
      case "2":
        console.log(2);
        return <Hands2 />;
      case "3":
        return <Hands3 />;
      case "4":
        return <Hands4 />;
      case "5":
        return <Hands5 />;
      default:
        return <div>Page not found</div>;
    }
  };

  return <div>{getHandsComponent(id!)}</div>;
};

export default DetailComponent;

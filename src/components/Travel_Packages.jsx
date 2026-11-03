import { useState, useEffect } from "react";
import plane from "../images/plane.png";
import star from "../images/star.png";
import { AiOutlineAppstore, AiOutlineClockCircle } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";
import "./Travel_Packages.css";

function Travel_Packages() {
    const [travel_packages, setTravel_Packages] = useState([]);

    //fetch the data
    useEffect( () => {
        fetch("/Travel_Packages.json")
        .then(response=>response.json()) //converts to the object
        .then((data)=>setTravel_Packages(data));
    }, []);

  return (
    <div className="travelPackageSection">
      <div className="travelPackageTitle">
        <h1>Best Travel Deals</h1>
        <img src={plane} />
      </div>
      <div className="travelPackageFlexbox">
        {travel_packages.map((travel_package) => (
          <div className="travelPackageElement" key={travel_package.ID}>
            <h2>{travel_package.DestinationName}</h2>
            <img src={travel_package.ImagePath} alt={travel_package.DestinationName} />
            <div className="travelPackageRating">
              {travel_package.Rating}
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </div>
            <p>
              <AiOutlineAppstore /> Category: {travel_package.Category}
            </p>
            <p>
              <BsCashStack /> Price : RM {travel_package.Price}
            </p>
            <p>
              <AiOutlineClockCircle /> Duration: {travel_package.Duration}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Travel_Packages;

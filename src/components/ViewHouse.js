import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


import "./ViewHouse.css";

import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import houseService from "../services/houseService";

const ViewHouse = () => {


  const { pathname } = useLocation();
  console.log(pathname)
  const id = pathname.split("/").slice(-1)[0];

    const [data ,setData] = useState({});  
  const houseData = async() => {
    try {
    const house = await houseService.gethouse(id)
    setData(house);
    console.log('house',data)
    } catch(e) {
        console.log(e)
    }
  }

  useEffect 
  (() => { 
    houseData()
  },[])


  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">

        {/* image */}
        <img src={data?.itemImageURL} alt="home" />

        <div className="flexCenter property-details">
          {/* left */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.houseDescription}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                $ {data?.price}
              </span>
            </div>

            {/* facilities */}
            <div className="flexStart facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.baths} Bathrooms</span>
              </div>

              {/* parkings */}
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span>{data?.area} Area</span>
              </div>

              {/* rooms */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>{data?.bedrooms} Room/s</span>
              </div>
            </div>

            {/* description */}

            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.houseType}
            </span>

            {/* address */}

            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data?.address}{" "}
              </span>
            </div>

           
          </div>

          {/* right side */}
          {/* <div className="map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ViewHouse;

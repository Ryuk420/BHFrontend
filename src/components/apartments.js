import React, { useEffect, useState  } from 'react';
import './Dashboard.css'; // Import the CSS file
import houseService from "../services/houseService";
import { useNavigate } from "react-router-dom";

function Dashboard() {


  const [data ,setData] = useState([]);  
  const userData = async() => {
    try {
    const _user = await houseService.getAllhouses()
    setData(_user);
    } catch(e) {
        console.log(e)
    }
  }

  useEffect
  (() => { 
    userData()
  },[])

  const navigate = useNavigate();

  // Define dummy products with image URLs
  const dummyProducts = [
    { id: 1, itemName: "RENOVATED BACHELOR SUITE AVAILABLE! Lakeview Towers", itemDescription: "Bachelors, 1 Bath, Recently Renovated Kitchen with New Appliances, Unit available",itemPrice: "$2000", itemImage: "https://media.kijiji.ca/api/v1/ca-prod-dealer-ads/images/d2/d2eeb8f9-bb7e-4b96-8639-6a533ffda530?rule=kijijica-640-webp" },
    { id: 2, itemName: "PRIVATE ROOM AVAILABLE FOR FEMALE ", itemDescription: "Spacious one-bedroom basement unit is available ", itemPrice: "$750",  itemImage: "https://media.kijiji.ca/api/v1/ca-prod-fsbo-ads/images/d1/d1d305a4-ec0e-44aa-b26e-da23419a017b?rule=kijijica-640-webp" },
    { id: 3, itemName: "2 bedroom, 2 bath condo", itemDescription: "A 2 bedroom and 2 bathroom 850 square feet condo", itemPrice: "$950", itemImage: "https://media.kijiji.ca/api/v1/ca-prod-dealer-ads/images/eb/ebba9d6c-16c6-40d5-968b-09bb7fdfcc75?rule=kijijica-640-webp" },
    { id: 4, itemName: "Studio 1 Bath Basement Apartment Close To Subway!", itemDescription: "Newly Updated, Spacious Bachelor Basement Apartment With Private Separate Entrance And Walk Out To Backyard. Fantastic Neighbourhood ", itemPrice: "$1700", itemImage: "https://media.kijiji.ca/api/v1/ca-prod-fsbo-ads/images/21/21fced52-ed57-4f40-aa7e-dbe85ce43894?rule=kijijica-640-webp" },
    { id: 5, itemName: "One Bedroom Apartment", itemDescription: "One Bedroom ApartmentRenovated 1 Bedroom Unit In A Boutique Style Low Rise Building", itemPrice: "$2000", itemImage: "https://photos.zillowstatic.com/fp/d09c939239c46ee66b2aae999048e1bb-p_e.jpg" },
    { id: 6, itemName: "1Bd at a family oriented building ", itemDescription: "1Bd at a family oriented building,Steps from public transit, shops, grocery stores, Private balcony and large green space surrounding the building", itemPrice: "$2089", itemImage: "https://photos.zillowstatic.com/fp/b074d65e232d82065c9b9c40b5239a38-p_e.jpg" },
    { id: 7, itemName: "Big Bright 3 Bed Loft - Furnished & All Inclusive", itemDescription: "minutes from the The Junction, trendy restaurants & boutiques, Farmer's Markets, Street Festivals. ", itemPrice: "$4100", itemImage: "https://images.nestseekers.com/_next/image?url=https://photos.nestseekers.com/Apt/C7DA734E-B9B5-4F2B-97F0-2528E753DE59.jpeg&w=3840&q=70" },
    { id: 8, itemName: "1 bedroom apartment for rent", itemDescription: "A fully renovated 1 bedroom basement apartment for rent",itemPrice: "$2300", itemImage: "https://media.kijiji.ca/api/v1/ca-prod-fsbo-ads/images/24/244c4f91-2e6f-4a14-96fb-59b26acbc141?rule=kijijica-640-webp" },
];

 return (
    <div className='container' >
      <div className="product-list" >
        {data.map(product => (
          <div key={product.houseId} className="product-item" onClick={()=>   navigate(`../apartments/${product.houseId}`)}>
            <img src={product.itemImageURL} alt={product.houseDescription} />
            <h3>{product.houseDescription}</h3>
            <p>{product.houseType}</p>
            <p>Price: {product.price} </p>
          </div>
        ))}
      </div>
    </div>
  
  );
};


export default Dashboard;

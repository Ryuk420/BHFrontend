import React, { useEffect, useState } from 'react';
import './Dashboard.css'; // Import the CSS file
import productService from '../services/productService';

function Dashboard() {

  const [itemdata ,setItemData] = useState([]);  
  const itemData = async() => {
    try {
    const _item = await productService.getAllProducts()
    setItemData(_item);
    } catch(e) {
        console.log(e)
    }
  }

  useEffect
  (() => { 
    itemData()
  },[])

  // Define dummy products with image URLs
  const dummyProducts = [
    { id: 1, itemName: "Modern Living Room Sofa", itemDescription: "Upholstered Couch Linen Fabric Loveseat 68 White Used", itemPrice: "$200.69", itemImage: "https://i.ebayimg.com/images/g/2esAAOSwKNVlVOMS/s-l1600.jpg" },
    { id: 2, itemName: "Mid-Century Accent Chair ", itemDescription: "Fabric Armchair Side Chair for Living Room Used", itemPrice: "$39.99",  itemImage: "https://media.kijiji.ca/api/v1/ca-prod-fsbo-ads/images/47/473717b9-5a8e-490a-8a91-0b4ae2013655?rule=kijijica-640-webp" },
    { id: 3, itemName: "Girls desk", itemDescription: "dresser set", itemPrice: "$125", itemImage: "https://i.ebayimg.com/images/g/hKQAAOSw0Ztl90W0/s-l1600.jpg" },
    { id: 4, itemName: "Living room Furniture White Table", itemDescription: "Cloud Coffee Table New Central Table With Leg", itemPrice: "$284.92",  itemImage: "https://kjca.images.icas.io/api/v1/f72ed6af/images/85/858164b2-c22f-46e0-80c4-760682ed648d?rule=kijijica-640-webp" },
    { id: 5, itemName: "Kings Brand Furniture", itemDescription: "Gray with Faux Leather Headboard Queen Size Bedroom Set", itemPrice: "$1200",  itemImage: "https://i.ebayimg.com/images/g/d8IAAOSwFYNl1S3i/s-l1600.jpg" },
    { id: 6, itemName: "PINE CABINET", itemDescription: "Brown Cabinet", itemPrice: "$30",  itemImage: "https://i.ebayimg.com/images/g/qc8AAOSw0Jll5epS/s-l1600.jpg" },
    { id: 7, itemName: "bahama style round dining table ", itemDescription: "4 Chair table", itemPrice: "$150",  itemImage: "https://i.ebayimg.com/images/g/S0AAAOSwYcJl6K0f/s-l1600.jpg" },
    { id: 8, itemName: "Brand New Mirrored Console ", itemDescription: "Shop the living room furniture that is made from quality material and is built to last. Make your shopping experience like never before with the high quality furniture items at affordable prices.", itemPrice: "$299",  itemImage: "https://i0.wp.com/myaashis.com/wp-content/uploads/2018/02/DC08_1_fab1b754-fc00-496c-a01b-affbc0a4b7f9.jpg?fit=1000%2C750&ssl=1" }
  ];

  return (
    <div className='container'>
      <div className="product-list">
        {itemdata.filter(product => product.category === 'furniture').map(product => (
          <div key={product._id} className="product-item">
            <img src={product.add_photos} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  
  );
};


export default Dashboard;



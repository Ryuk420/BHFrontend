import React, { useState , useEffect } from 'react';
import './Dashboard.css'; // Import the CSS file
import productService from '../services/productService';


function Dashboard() {
  // Define dummy products with image URLs

  
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

  const dummyProducts = [
    { id: 1, itemName: "Dog Man", itemDescription: "The Scarlet Shedder: A Graphic Novel (Dog Man #12): From the Creator of Captain Underpants",itemPrice: "$10.99", itemImage: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/01/dog-man-header.jpg" },
    { id: 2, itemName: "A Court of Thorns and Roses", itemDescription: "Paperback Box Set (5 books) ", itemPrice: "$55.99",  itemImage: "https://static1.squarespace.com/static/5e24e03399d8c23d1391c65b/5e24e083c77df972907ca254/5f3dc3b090c40d4c984e0e7b/1681437403119/review-a-court-of-thorns-and-roses.jpg?format=1500w" },
    { id: 3, itemName: "The Mystery Writer", itemDescription: "A Novel", itemPrice: "$31.49", itemImage: "https://m.media-amazon.com/images/I/81C68VfP0yL._SY522_.jpg" },
    { id: 4, itemName: "The Perfect Us", itemDescription: "Durjoy Datta", itemPrice: "$14.95", itemImage: "https://m.media-amazon.com/images/I/71Ym1kb4TQL._SY522_.jpg" },
    { id: 5, itemName: "World's Best Girlfriend", itemDescription: "Durjoy Datta", itemPrice: "$16.95", itemImage: "https://m.media-amazon.com/images/I/71cfajSkrcL._SY522_.jpg" },
    { id: 6, itemName: "Kings of Paradise ", itemDescription: "Ash and Sand Book 1", itemPrice: "$22.99", itemImage: "https://thefantasyinn.com/wp-content/uploads/2018/07/359948301.jpg" },
    { id: 7, itemName: "Build a Better Brain", itemDescription: "Using Neuroplasticity to Train Your Brain for Motivation, Discipline, Courage, and Mental Sharpness (Think Smarter, Not Harder)", itemPrice: "$14.24", itemImage: "https://covers.audiobooks.com/images/covers/full/9781662284724.jpg" },
    { id: 8, itemName: "Harry Potter and the Sorcerer's Stone", itemDescription: "MinaLima Edition",itemPrice: "$21.99", itemImage: "https://m.media-amazon.com/images/I/71XqqKTZz7L._AC_UF1000,1000_QL80_.jpg" },
];

  return (
    <div className='container'>
      <div className="product-list">
        {itemdata.filter(product => product.category === 'books').map(product => (
          <div key={product._id} className="product-item">
            <img src={product.add_photos} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price} </p>
          </div>
        ))}
      </div>
    </div>
  
  );
};


export default Dashboard;



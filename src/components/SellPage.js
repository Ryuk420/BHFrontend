/*import React, { useEffect, useState } from 'react';
import './sellPage.css';
import productService from '../services/productService';

const SellPage = () => {
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemImage, setItemImage] = useState(null);
    const [currencyType, setCurrencyType] = useState(''); // Declare and initialize currencyType

    const handleItemNameChange = (e) => {
        setItemName(e.target.value);
    };

    const handleItemDescriptionChange = (e) => {
        setItemDescription(e.target.value);
    };

    const handleItemPriceChange = (e) => {
        setItemPrice(e.target.value);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setItemImage(file);
    };

    const handleCurrencyTypeChange = (e) => {
        setCurrencyType(e.target.value); // Update currencyType state
    };

    const handleListItem = async () => {
        // Logic to handle listing the item, e.g., sending data to the server
        const itemFull = {
            "itemTitle": itemName,
            "itemDescription": itemDescription,
            "itemPrice": itemPrice,
            "itemImageURL": itemImage,
            "itemCurrency": currencyType
        }

        const res = productService.createProduct(itemFull);
        console.log(res);
        console.log('Item listed:', { itemName, itemDescription, itemPrice, itemImage, currencyType });
    };

    return (
        <div className="sell-page">
            <h2>List an Item</h2>
            <form className="sell-form">
                <label>Title:</label>
                <input type="text" value={itemName} onChange={handleItemNameChange} />

                <label>Description:</label>
                <textarea value={itemDescription} onChange={handleItemDescriptionChange}></textarea>

                <label>Price:</label>
                <input type="text" value={itemPrice} onChange={handleItemPriceChange} />

                <select value={currencyType} onChange={handleCurrencyTypeChange}>
                    <option value="dollar">Dollar</option>
                    <option value="euro">Euro</option>
                    <option value="pound">Pound</option>
                    <option value="rupees">Indian Rupees</option>
                </select>

                <label>Image:</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} />

                <button type="button" onClick={handleListItem}>List Item</button>
            </form>
        </div>
    );
};

export default SellPage;*/

import React, { useState } from 'react';
import "../components/BookingPage.scss";
import { Link, useNavigate } from 'react-router-dom';
import productService from '../services/productService';
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer , toast } from "react-toastify";

const SellPage = () => {
  const [adDetails, setAdDetails, onSelect, selected] = useState({
    category: '',
    adType: '',
    saleBy: '',
    fulfillment: [],
    payment: [],
    condition: '',
    title: '',
    description: '',
    tags: [],

  });

  const [media, setMedia] = useState({
    photos: [],
    youtubeVideo: '',
  });
  const [location, setLocation] = useState('');
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState({
    amount: '',
    type: '',
  });
  const [contactInfo, setContactInfo] = useState({
    phoneNumber: '',
    email: '',
  });
  const [promotion, setPromotion] = useState({
    topAd: false,
    highlightAd: false,
    urgentAd: false,
    homepageGallery: false,
    websiteURL: '',
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setAdDetails(prevState => ({
        ...prevState,
        [name]: checked ? [...prevState[name], value] : prevState[name].filter(item => item !== value),
      }));
    } else {
      setAdDetails(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  //Media section
  const MediaSection = () => {
    const [media, setMedia] = useState({
      photos: [],
      youtubeVideo: '',
    });
  };
  const handlePhotoChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        setMedia((prevState) => ({
          ...prevState,
          photos: [...prevState.photos, e.target.result],
        }));
      };

      fileReader.readAsDataURL(event.target.files[0]);
      const base64 = await convertToBase64(event.target.files[0]);
      setImageURL(base64);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleYouTubeChange = (event) => {
    setMedia((prevState) => ({
      ...prevState,
      youtubeVideo: event.target.value,
    }));

  };

  const removePhoto = (index) => {
    setMedia((prevState) => ({
      ...prevState,
      photos: prevState.photos.filter((_, photoIndex) => photoIndex !== index),
    }));

  };

  //Location section
  const LocationSection = () => {
    const [location, setLocation] = useState('');
  };

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  //Price Section
  const PriceSection = () => {
    const [price, setPrice] = useState({
      amount: '',
      type: '', // For special options like 'Free', 'Please Contact', 'Swap/Trade'
    });



  };
  const handleInputChange1 = (event) => {
    const { name, value, type } = event.target;

    // If the input type is radio and it's checked, clear the amount field
    if (type === "radio") {
      setPrice({ amount: '', type: value });
    } else { // Handle changes for the amount input
      setPrice(prevState => ({
        ...prevState,
        amount: value,
        type: '', // Reset the type to ensure amount input is considered
      }));
    }
  };
  //Contact section
  const ContactInformationSection = () => {
    const [contactInfo, setContactInfo] = useState({
      phoneNumber: '',
      email: '',
    });
  };
  const handleInputChange2 = (event) => {
    const { name, value } = event.target;
    setContactInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reqBody = {
      "category": adDetails.category,
      "type": adDetails.type,
      "title": adDetails.title,
      "description": adDetails.description,
      "add_photos": imageURL,
      "add_videos": "video_url",
      "location": location,
      "price": price.amount,
      "phone_number": contactInfo.phoneNumber,
      "remail": contactInfo.email
    }

    const res = await productService.createProduct(reqBody);
    console.log(reqBody);
    console.log(res);
    toast.success("Item Posted Succesfully", { position: "bottom-right" });
    setTimeout(() => { navigate("/"); }, 1000);
    //alert("Post Successfully Added", { position: "bottom-right" });
    //navigate("/");
    //console.log('Form submitted:', { propertyType, numBedrooms, numBaths, squareFeet, description, images, location, address });
  };
  //console.log('Form submitted:', adDetails);


// Handlers for changes in the form inputs would go here
// For brevity, these are not implemented in this example

return (

  <form onSubmit={handleSubmit}>

    <div className='post'>
      <h2>Ad Details</h2>


      <label htmlFor="category">Select Category:</label>
      <select name="category" value={adDetails.category} onChange={handleInputChange}>
        <option value="">Select a category</option>
        <option value="electronics">Electronics</option>
        <option value="vehicles">Vehicle</option>
        <option value="furniture">Furniture</option>
        <option value="stationery">Stationery</option>
        <option value="books">Books</option>

        <option value="gym equipments">Gym equipments</option>
        <option value="Free Goods">Free Goods</option>

        {/* Add more options here */}
      </select>

      <div>
        <p>Ad Type:</p>
        <label>
          <input type="radio" name="adType" value="I'm offering" checked={adDetails.adType === "I'm offering"} onChange={handleInputChange} />
          I'm offering - You are offering an item for sale
        </label><br></br>
        <label>
          <input type="radio" name="adType" value="I want to find" checked={adDetails.adType === "I want to find"} onChange={handleInputChange} />
          I want to find - You want to buy an item
        </label>
      </div><br></br>

      <label htmlFor="title">Ad title:</label>
      <input type="text" name="title" value={adDetails.title} onChange={handleInputChange} />

      <label htmlFor="description">Description:</label>
      <textarea name="description" value={adDetails.description} onChange={handleInputChange}></textarea>


    </div>




    {/* Media section */}
    <div>
      <h2>Media</h2>
      <div>
        <label htmlFor="photos">Add photos:</label>
        <input type="file" accept="image/*" onChange={handlePhotoChange} multiple />
        <div className="photos-preview">
          {media.photos.map((photo, index) => (
            <div key={index} className="photo-container">
              <img src={photo} alt="Uploaded" style={{ width: '100px', height: '100px' }} />
              <button type="button" onClick={() => removePhoto(index)}>Remove</button>
            </div>
          ))}
        </div>
      </div><br></br>
      <div>
        <label htmlFor="youtubeVideo">YouTube Video (optional):</label>
        <input type="text" name="youtubeVideo" placeholder="Enter YouTube video link" value={media.youtubeVideo} onChange={handleYouTubeChange} />
      </div>

    </div>

    {/* Location section */}
    <div>
      <h2>Location</h2>
      <label htmlFor="location">Your Location:</label>
      <input
        type="text"
        name="location"
        placeholder="Enter your location"
        value={location}
        onChange={handleChange}
      />


      {location && (
        <p>
          Location to display: <strong>{location}</strong>
        </p>
      )}
    </div>

    {/* Price section */}
    <div>
      <h2>Price</h2>
      <input
        type="number"
        name="amount"
        placeholder="Enter price ($)"
        value={price.amount}
        onChange={handleInputChange1}
        disabled={price.type !== ''}
        min="0"
      />
      <div>
        <label>
          <input
            type="radio"
            name="type"
            value="Free"
            checked={price.type === 'Free'}
            onChange={handleInputChange1}
          />
          Free
        </label><br></br>
        <label>
          <input
            type="radio"
            name="type"
            value="Please Contact"
            checked={price.type === 'Please Contact'}
            onChange={handleInputChange1}
          />
          Please Contact
        </label><br></br>
        <label>
          <input
            type="radio"
            name="type"
            value="Swap/Trade"
            checked={price.type === 'Swap/Trade'}
            onChange={handleInputChange1}
          />
          Swap/Trade
        </label>


      </div>
    </div>

    {/* Contact Information section */}
    <div>
      <h2>Contact Information</h2>

      <label htmlFor="phoneNumber">Phone number (optional):</label>
      <input
        type="text"
        name="phoneNumber"
        placeholder="e.g., 123 456 7890"
        value={contactInfo.phoneNumber}
        onChange={handleInputChange2}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Your email address"
        value={contactInfo.email}
        onChange={handleInputChange2}
      />
      <p>Your email address will not be shared with others.</p>
    </div>

    <button type="submit" className="button-like-class">Post Item</button>
      <ToastContainer/>
  </form>

);

};


export default SellPage;



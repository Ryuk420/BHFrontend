import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import houseService from '../services/houseService';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";



const PostAdForm = () => {
  const [formData, setFormData, onSelect, selected] = useState({
    category: '',
    adType: '',
    forRentBy: '',
    unitType: '',
    bedrooms: 0,
    bathrooms: 0,
    agreementType: '',
    moveInDate: '',
    petFriendly: '',
    size: 0,
    furnished: '',
    appliances: [],
    airConditioning: '',
    personalOutdoorSpace: '',
    smokingPermitted: '',
    accessibilityFeatures: '',
    utilitiesIncluded: [],
    parkingIncluded: '',
    rentDeferral: false,
    onlineApplication: false,
    videoChat: false,
    videoWalkthrough: false,
    adTitle: '',
    description: '',
    tags: [],
    location: '',
    priceOption: '',
    price: 0,
    phoneNumber: '',
    email: '',
  });
  const [price, setPrice] = useState({
    amount: 0,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));

  };

  const[imageUrl , setImageUrl] = useState("");

  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    try {
      const reqBody = {
        "houseType": formData.category,
        "houseDescription": desc,
        "bedrooms": formData.bedrooms,
        "baths": formData.bathrooms,
        "area": formData.size,
        "itemImageURL": imageUrl,
        "pincode": 11002,
        "address": location,
        "price": price.amount
      }

      const res = await houseService.createhouse(reqBody);
      console.log(reqBody);
      console.log(res);
      toast.success("Home Added Successfully", { position: "bottom-right" });
      setTimeout(() => { navigate("/apartments"); }, 1500);
      //console.log(user);
    } catch (error) {
      setErrors(error.response.data.errors);
    }

    console.log(formData);
    // Here you would typically send the form data to a server
  };
  const radioButtonGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  };
  const radioButtonStyle = {
    marginBottom: '5px', // Adds space between the radio button groups
  };

  {/*media*/ }
  const [media, setMedia] = useState({
    photos: [],
    youtubeVideo: '',
  });
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
      setImageUrl(base64);
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
    setDesc(event.target.value);
  };

  const removePhoto = (index) => {
    setMedia((prevState) => ({
      ...prevState,
      photos: prevState.photos.filter((_, photoIndex) => photoIndex !== index),
    }));

  };


  //Location section
  const [location, setLocation] = useState('');
  const [desc, setDesc] = useState("");


  const handleChange1 = (event) => {
    setLocation(event.target.value);
  };


  const handleInputChange1 = (event) => {
    const { name, value, type } = event.target;

    // If the input type is radio and it's checked, clear the amount field
    if (type === "radio") {
      setPrice({ amount: 0, type: value });
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


  //promotion
  const [features, setFeatures] = useState({
    topAd: false,
    highlightAd: false,
    urgentAd: false,
    homepageGallery: false,
    websiteURL: '',
  });
  const PromotionFeaturesSection = () => {

  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFeatures((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };



  const handleInputChange3 = (event) => {
    const { name, value } = event.target;
    setFeatures((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };




  return (
    <form onSubmit={handleSubmit1}>
      {/* Sample for category selection */}
      <label htmlFor="category">Select Category:</label>
      <select name="category" id="category" value={formData.category} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="condo">condo</option>
        <option value="apartment">Apartments</option>
        <option value="Basement">Basement</option>
        <option value="House">House</option>
        <option value="Duplex">Duplex</option>
      </select>

      {/* Bedrooms */}
      <label htmlFor="bedrooms">Bedrooms:</label>
      <select name="bedrooms" id="bedrooms" value={formData.bedrooms} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        {/* Add more options as needed */}
      </select>

      {/* Bathrooms */}
      <label htmlFor="bathrooms">Bathrooms:</label>
      <select name="bathrooms" id="bathrooms" value={formData.bathrooms} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="1">1</option>
        <option value="1.5">1.5</option>
        <option value="2">2</option>
        {/* Add more options as needed */}
      </select>

      {/* Agreement Type */}
      <label htmlFor="agreementType">Agreement Type:</label>
      <select name="agreementType" id="agreementType" value={formData.agreementType} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="month-to-month">Month-to-month</option>
        <option value="1-year">1 Year</option>
      </select>

      {/* Move-In Date */}
      <div>
        <label htmlFor="moveInDate">Move-In Date:</label>
        <input
          type="date"
          name="moveInDate"
          id="moveInDate"
          value={formData.moveInDate}
          onChange={handleChange}
        />
      </div><br></br>
      {/* Pet Friendly */}
      <div>
        <label>Pet Friendly:</label>
        <div style={radioButtonStyle}>
          <label>
            <input
              type="radio"
              id="petYes"
              name="petFriendly"
              value="yes"
              checked={formData.petFriendly === 'yes'}
              onChange={handleChange}
            />
            Yes</label>
        </div>
        <div style={radioButtonStyle}>
          <label>
            <input
              type="radio"
              id="petNo"
              name="petFriendly"
              value="no"
              checked={formData.petFriendly === 'no'}
              onChange={handleChange}
            />
            No</label>
        </div>
      </div><br></br>


      {/* Size (sqft) */}
      <label htmlFor="size">Size (sqft):</label>
      <input
        type="number"
        name="size"
        id="size"
        value={formData.size}
        onChange={handleChange}
      />

      {/* Furnished */}
      <div>
        <label>Furnished:</label>
        <div style={radioButtonStyle}>
          <label>
            <input
              type="radio"
              id="furnishedYes"
              name="furnished"
              value="yes"
              checked={formData.furnished === 'yes'}
              onChange={handleChange}
            />
            Yes</label>
        </div>
        <div style={radioButtonStyle}>
          <label>
            <input
              type="radio"
              id="furnishedNo"
              name="furnished"
              value="no"
              checked={formData.furnished === 'no'}
              onChange={handleChange}
            />
            No</label>
        </div>
      </div><br></br>

      {/* Appliances */}
      <div>
        <legend>Appliances:</legend>
        <label>
          <input
            type="checkbox"
            name="laundryInUnit"
            checked={formData.appliances.laundryInUnit}
            onChange={handleChange}
          />
          Laundry (In Unit)
        </label><br></br>
        <label>
          <input
            type="checkbox"
            name="laundryInBuilding"
            checked={formData.appliances.laundryInBuilding}
            onChange={handleChange}
          />
          Laundry (In Building)
        </label><br></br>
        <label>
          <input
            type="checkbox"
            name="dishwasher"
            checked={formData.appliances.dishwasher}
            onChange={handleChange}
          />
          Dishwasher
        </label><br></br>
        <label>
          <input
            type="checkbox"
            name="fridgeFreezer"
            checked={formData.appliances.fridgeFreezer}
            onChange={handleChange}
          />
          Fridge / Freezer
        </label><br></br>
      </div>

      {/*media*/}
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
          <label htmlFor="description">Property Description:</label>
          <input type="text" name="description" placeholder="Enter Description" value={desc} onChange={handleYouTubeChange} />
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
          onChange={handleChange1}
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







      <button type="submit" className="button-like-class" >Submit</button>
        <ToastContainer/>
    </form>
  );
};

export default PostAdForm;

import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8084/house' });

const houseService = {
    getAllhouses: async () => {
      try {
        const response = await API.get(`/getAllHouses`);
        return response.data;
      } catch (error) {
        console.error('Error fetching houses:', error);
        throw error;
      }
    },
  
    createhouse: async (houseData) => {
      try {
        const response = await API.post(`/saveHouse`, houseData);
        return response.data;
      } catch (error) {
        console.error('Error creating house:', error);
        throw error;
      }
    },
  
    updatehouse: async (houseId, houseData) => {
      try {
        const response = await API.put(`updateHouse/${houseId}`, houseData);
        return response.data;
      } catch (error) {
        console.error('Error updating house:', error);
        throw error;
      }
    },
  
    deletehouse: async (houseId) => {
      try {
        const response = await API.delete(`/deleteHouse/${houseId}`);
        return response.data;
      } catch (error) {
        console.error('Error deleting house:', error);
        throw error;
      }
    },

    gethouse: async (houseId) => {
      try {
        const response = await API.get(`/getHouse/${houseId}`);
        return response.data;
      } catch (error) {
        console.error('Error deleting house:', error);
        throw error;
      }
    }
  };
  
  export default houseService;
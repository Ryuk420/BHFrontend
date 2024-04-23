import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8084/users' });

const userService = {
    loginUser: async (loginData) => {
        try {
          const response = await API.post(`/login`, loginData);
          return response.data;
        } catch (error) {
          console.error('Error loggin in', error);
          throw error;
        }
      },
    
      createUser: async (userData) => {
        try {
          const response = await API.post(`/register`, userData);
          return response;
        } catch (error) {
          console.error('Error creating User:', error);
          throw error;
        }
      }
};

export default userService;
// src/api/apiService.js
import BASE_URL from '../config/baseUrl';

// Helper function for API requests
// src/api/apiService.js
const request = async (endpoint, method = 'GET', body = null) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'app-id': 'your-app-id', // Replace with your API key if needed
      },
      body: body ? JSON.stringify(body) : null,
    });
  
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
  
    return response.json(); // Assumes that response is always in JSON format
  };
  
  export default request; // Default export
  


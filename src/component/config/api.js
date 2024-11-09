import axios from 'axios';

// Define the base URL for your API
export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5454"; // Set base URL dynamically for production

// Create an axios instance with default configurations
export const api = axios.create({
    baseURL: API_URL, // Base URL for all requests
    headers: {
        "Content-Type": "application/json", // Default Content-Type for JSON requests
    },
    timeout: 5000, // Timeout for requests (optional)
});

// Add a request interceptor to attach the token if available
api.interceptors.request.use(config => {
    const token = localStorage.getItem("jwt"); // Get token from localStorage
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`; // Attach token in Authorization header
    }
    return config;
}, error => {
    return Promise.reject(error); // Handle any request error here
});

// Add a response interceptor for error handling
api.interceptors.response.use(
    response => response, // Return the response if successful
    error => {
        console.error("API Error:", error); // Handle the error globally
        return Promise.reject(error); // Reject the error so that it can be handled later
    }
);

// frontend/src/api/snippetService.js

import axios from 'axios'; // Make sure axios is installed in your frontend

const API_BASE_URL = 'http://localhost:3000/api/snippet'; // Adjust if your backend is on a different port or domain

// Function to create a new snippet
export async function createSnippet(content) {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, {
      content,
    });
    return response.data.snippet; // Return the created snippet data
  } catch (error) {
    // Handle errors (e.g., display an error message to the user)
    console.error('Error creating snippet:', error);
    throw error; // Rethrow the error for the component to handle
  }
}

// Function to get a snippet by token
export async function getSnippet(token) {
  try {
    const response = await axios.get(`${API_BASE_URL}/${token}`);
    return response.data.snippet; // Return the fetched snippet data
  } catch (error) {
    // Handle errors (e.g., snippet not found)
    console.error('Error getting snippet:', error);
    throw error; // Rethrow the error for the component to handle
  }
}

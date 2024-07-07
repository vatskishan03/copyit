// frontend/src/api/snippetService.js

import axios from 'axios'; 

const API_BASE_URL='https://copyit-opal.vercel.app/api/snippet'
// const API_BASE_URL = 'https://copy-ac8t.onrender.com/api/snippet'; // Adjust backend is on a different port or domain

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


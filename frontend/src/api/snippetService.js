import axios from 'axios'; 
// const API_BASE_URL = 'https://copy-ac8t.onrender.com/api/snippet'; 
const API_BASE_URL='http://localhost:3000/api/snippet';
export async function createSnippet(content) {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, {
      content,
    });
    return response.data.snippet; 
  } catch (error) {
    console.error('Error creating snippet:', error);
    throw error; 
  }
}
export async function getSnippet(token) {
  try {
    const response = await axios.get(`${API_BASE_URL}/${token}`);
    return response.data.snippet; 
  } catch (error) {
    console.error('Error getting snippet:', error);
    throw error; 
}
}

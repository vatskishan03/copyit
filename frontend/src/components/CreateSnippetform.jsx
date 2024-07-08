// import React, { useState } from 'react';
// import { createSnippet } from '../api/snippetService';
// import { useNavigate } from 'react-router-dom';

// function CreateSnippetForm() {
//   const [content, setContent] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const newSnippet = await createSnippet(content);
//       navigate(`/receive/${newSnippet.token}`);
//     } catch (error) {
//       console.error('Error creating snippet:', error);
//       setError(error.response?.data?.error || 'An error occurred.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow">
//       <div className="mb-4">
//         <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
//           Enter your text:
//         </label>
//         <textarea
//           id="content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>

//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
//           <span className="block sm:inline">{error}</span>
//         </div>
//       )}

//       <div className="flex items-center justify-center">
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           disabled={isLoading}
//         >
//           {isLoading ? 'Creating...' : 'Create'}
//         </button>
//       </div>
//     </form>
//   );
// }

// export default CreateSnippetForm;


// import React, { useState } from 'react';
// import { createSnippet } from '../api/snippetService';
// import { useNavigate } from "react-router-dom";

// function CreateSnippetForm() {
//   const [content, setContent] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [generatedToken, setGeneratedToken] = useState(null); // State to store the token
//   const navigate = useNavigate(); 

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const newSnippet = await createSnippet(content);
//       setGeneratedToken(newSnippet.token); 
//       // navigate(`/receive/${newSnippet.token}`); 
//     } catch (error) {
//       console.error('Error creating snippet:', error);
//       setError(error.response?.data?.error || 'An error occurred.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow">
//       <div className="mb-4">
//         <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
//           Enter your text:
//         </label>
//         <textarea
//           id="content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>

//       {/* Display generated token if available */}
//       {generatedToken && (
//         <div className="mb-9">
//           <p className="text-gray-700 text-sm font-bold">
//             Token:{generatedToken}
//           </p>
//         </div>
//       )}

//       {/* Display error message if it exists */}
//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
//           <span className="block sm:inline">{error}</span>
//         </div>
//       )}

//       <div className="flex items-center justify-center">
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           disabled={isLoading}
//         >
//           {isLoading ? 'Creating...' : 'Create'}
//         </button>
//       </div>
//     </form>
//   );
// }

// export default CreateSnippetForm;




// frontend/src/components/CreateSnippetForm.jsx
import React, { useState, useRef } from 'react';
import { createSnippet } from '../api/snippetService.js';
import { ClipboardIcon } from '@heroicons/react/outline'; 

function CreateSnippetForm() {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 
  const [generatedToken, setGeneratedToken] = useState(null); 
  
  const tokenRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const newSnippet = await createSnippet(content);
      setGeneratedToken(newSnippet.token); 
    } catch (error) {
      console.error('Error creating snippet:', error);
      setError(error.response?.data?.error || 'An error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToken = () => {
    if (generatedToken && tokenRef.current) {
      navigator.clipboard.writeText(generatedToken); // Copy the token to clipboard
      // Optionally, you can add a visual confirmation (e.g., change button text to "Copied!")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <div className="mb-4">
       <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
          Enter your text:
        </label>
         <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      {generatedToken && (
        <div className="mb-6 pt-4"> 
          <p className="text-gray-700 text-sm" ref={tokenRef}>
            Token:<span className="font-bold">{generatedToken}</span> 
            <button type="button" onClick={handleCopyToken} className="ml-2">
            <ClipboardIcon className="h-5 w-5 text-gray-500 inline-block" /> 
            </button>
          </p>
        </div>
      )}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={isLoading}
        >
          {isLoading ? 'Creating...' : 'Create'}
        </button>
      </div>
    </form>
  );
}

export default CreateSnippetForm;

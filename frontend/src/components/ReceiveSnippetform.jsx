// // frontend/src/components/ReceiveSnippetForm.jsx
// import React, { useState, useEffect } from "react";
// import { getSnippet } from "../api/snippetService";
// import { useNavigate, useParams } from "react-router-dom";

// function ReceiveSnippetForm() {
//   const [token, setToken] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [snippet, setSnippet] = useState(null);
//   const [error, setError] = useState(null);
//   const { token: tokenParam } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (tokenParam) {
//       // Fetch only if a token is provided in the URL
//       fetchSnippet(tokenParam);
//     }
//   }, [tokenParam]); // Include tokenParam in dependency array

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     fetchSnippet(token);
//   };

//   const fetchSnippet = async (token) => {
//     setIsLoading(true);
//     setError(null); // Reset error state
//     try {
//       const fetchedSnippet = await getSnippet(token);
//       if (!fetchedSnippet) {
//         throw new Error("Invalid token or snippet not found.");
//       }
//       setSnippet(fetchedSnippet);
//     } catch (error) {
//       console.error("Error fetching snippet:", error);
//       setError(error.response?.data?.error || "An error occurred.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label
//             htmlFor="token"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Enter token:
//           </label>
//           <input
//             type="text"
//             id="token"
//             value={token}
//             onChange={(e) => setToken(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         {/* Error Message Display */}
//         {error && <p className="text-red-500 text-sm">{error}</p>}

//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           disabled={isLoading}
//         >
//           {isLoading ? "Retrieving..." : "Receive"}
//         </button>
//       </form>

//       {snippet && (
//         <div className="mt-8 whitespace-pre-wrap">{snippet.content}</div>
//       )}
//     </div>
//   );
// }

// export default ReceiveSnippetForm;




// import React, { useState, useEffect } from "react";
// import { getSnippet } from "../api/snippetService";
// import { useNavigate, useParams } from "react-router-dom";

// function ReceiveSnippetForm() {
//   const [token, setToken] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [snippet, setSnippet] = useState(null);
//   const [error, setError] = useState(null);
//   const { token: tokenParam } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (tokenParam) {
//       // Fetch only if a token is provided in the URL
//       fetchSnippet(tokenParam);
//     }
//   }, [tokenParam]); // Include tokenParam in dependency array

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     fetchSnippet(token); // Fetch the snippet when the form is submitted
//   };

//   const fetchSnippet = async (token) => {
//     setIsLoading(true);
//     setError(null); // Reset error state
//     try {
//       const fetchedSnippet = await getSnippet(token);
//       if (!fetchedSnippet) {
//         throw new Error("Invalid token or snippet not found.");
//       }
//       setSnippet(fetchedSnippet);
//     } catch (error) {
//       console.error("Error fetching snippet:", error);
//       setError(error.response?.data?.error || "An error occurred.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
//       <form onSubmit={handleSubmit} className="space-y-4">
//          <div>
//            <label
//             htmlFor="token"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Enter token:
//           </label>
//           <input
//             type="text"
//             id="token"
//             value={token}
//             onChange={(e) => setToken(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         {/* Error Message Display */}
//         {error && <p className="text-red-500 text-sm">{error}</p>}

//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           disabled={isLoading}
//         >
//           {isLoading ? "Retrieving..." : "Receive"}
//         </button>
//       </form>

//       {isLoading ? (
//         <p>Loading snippet...</p> 
//       ) : error ? (
//         <p className="text-red-500 text-sm">{error}</p>
//       ) : snippet ? (
//         <div className="mt-8 whitespace-pre-wrap">
//           {snippet.content} 
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default ReceiveSnippetForm;




import React, { useState, useEffect } from "react";
import { getSnippet } from "../api/snippetService";
import { useNavigate, useParams } from "react-router-dom";

function ReceiveSnippetForm() {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [snippet, setSnippet] = useState(null);
  const [error, setError] = useState(null);
  const { token: tokenParam } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenParam) {
      fetchSnippet(tokenParam);
    }
  }, [tokenParam]); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchSnippet(token); 
  };

  const fetchSnippet = async (token) => {
    setIsLoading(true);
    setError(null); // Reset error state
    try {
      const fetchedSnippet = await getSnippet(token);
      if (!fetchedSnippet) {
        throw new Error("Invalid token or snippet not found.");
      }
      setSnippet(fetchedSnippet);
    } catch (error) {
      console.error("Error fetching snippet:", error);
      setError(error.response?.data?.error || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={isLoading}
        >
          {isLoading ? "Retrieving..." : "Receive"}
        </button>
      </form>
      {isLoading ? (
        <p>Loading snippet...</p>
      ) : snippet ? (
        <div className="mt-8 whitespace-pre-wrap">
          {snippet.content}
        </div>
      ) : error ? (
        <p className="text-red-500 text-sm">{error}</p>
      ) : null}
    </div>
  );
}

export default ReceiveSnippetForm;

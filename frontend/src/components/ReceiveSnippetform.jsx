// frontend/src/components/ReceiveSnippetForm.jsx
import React, { useState, useEffect,useRef } from "react";
import { getSnippet } from "../api/snippetService";
import { useParams } from "react-router-dom";
import { MdContentCopy } from 'react-icons/md';

function ReceiveSnippetForm() {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [snippet, setSnippet] = useState(null);
  const [error, setError] = useState(null);
  const [copyContentSuccess, setCopyContentSuccess] = useState(false);
  const contentRef = useRef(null);
  const { token: tokenParam } = useParams();

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
    setError(null); 
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
  const handleCopyContent = () => {
    if (snippet && snippet.content && contentRef.current) {
        navigator.clipboard.writeText(snippet.content)
            .then(() => {
                setCopyContentSuccess(true);
                setTimeout(() => setCopyContentSuccess(false), 402);
            })
            .catch(err => {
                console.error('Failed to copy content: ', err);
            });
    }
};


  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="token"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Enter token:
          </label>
          <input
            type="text"
            id="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-black focus:shadow-outline"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={isLoading}
        >
          {isLoading ? "Retrieving..." : "Receive"}
        </button>
      </form>

      {snippet && (
                <div className="mt-8 whitespace-pre-wrap relative"> 
                <p className="text-gray-700 text-sm" ref={contentRef}>
                    {snippet.content}
                </p>
            
                <button 
                    type="button" 
                    onClick={handleCopyContent} 
                    className="absolute top-0 right-0 ml-2 inline-flex items-center"
                >
                    <MdContentCopy className="h-5 w-5 text-gray-500 inline-block" />
                    {copyContentSuccess && <span className="ml-1 text-green-500">Copied!</span>}
                </button>
            </div>
            
            )}
        </div>
    );
}
export default ReceiveSnippetForm;

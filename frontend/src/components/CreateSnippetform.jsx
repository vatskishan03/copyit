// frontend/src/components/CreateSnippetForm.jsx
import React, { useState, useRef } from 'react';
import { createSnippet } from '../api/snippetService.js';
import { MdContentCopy } from 'react-icons/md';

function CreateSnippetForm() {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 
  const [generatedToken, setGeneratedToken] = useState(null); 
  const [newSnippet, setNewSnippet] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  
  const tokenRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const fetchedSnippet = await createSnippet(content);
      setGeneratedToken(fetchedSnippet.token);
      setNewSnippet(fetchedSnippet); 
    } catch (error) {
      console.error('Error creating snippet:', error);
      setError(error.response?.data?.error || 'An error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToken = () => {
    if (generatedToken) { 
        navigator.clipboard.writeText(generatedToken)
            .then(() => {
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false),402); 
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
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
                <div className="mb-6 pt-4 flex items-center">
                    <p className="text-gray-700 text-sm">Token:</p>
                    {/* <span className="font-bold">{generatedToken}</span> */}
                    <span className="font-bold" style={{ marginLeft: '0.2rem', marginRight: '0.5rem' }}>{generatedToken}</span>
                    <button type="button" onClick={handleCopyToken} className="inline-flex items-center">
                        <MdContentCopy className="h-5 w-5 mx-6 text-gray-500 inline-block" />
                        {copySuccess && <span className="mx-4 text-green-500">Copied!</span>}
                    </button>
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-8 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={isLoading}
        >
          {isLoading ? 'Creating...' : 'Create'}
        </button>
      </div>
    </form>
  );
}

export default CreateSnippetForm;
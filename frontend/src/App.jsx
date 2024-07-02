// frontend/src/App.jsx
import React, { useState } from 'react';
import CreateSnippetForm from './components/CreateSnippetform.jsx';
import ReceiveSnippetForm from './components/ReceiveSnippetform.jsx';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className='flex items-center justify-center h-screen'>
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline">{error.message}</span>
        <button onClick={resetErrorBoundary} className='absolute top-0 bottom-0 right-0 px-4 py-3'>Try again</button>
      </div>
    </div>
  );
}

function App() {
  const [showReceiveForm, setShowReceiveForm] = useState(false);

  const handleReceiveCopyClick = () => {
    setShowReceiveForm(true);
  };

  const handleCreateCopyClick = () => {
    setShowReceiveForm(false);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white py-4 shadow">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold text-center">
                Text Sharing App
              </h1>
            </div>
          </header>
          <main className="container mx-auto px-4 py-8 flex justify-center gap-4">
            {!showReceiveForm && <CreateSnippetForm />}
            {showReceiveForm && <ReceiveSnippetForm />}
          </main>

          <div className="container mx-auto px-4 pb-8 flex justify-center gap-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleReceiveCopyClick}
            >
              Receive Copy
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleCreateCopyClick}
            >
              Create Copy
            </button>
          </div>
        </div>
    </ErrorBoundary>
  );
}

export default App;

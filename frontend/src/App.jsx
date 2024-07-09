// frontend/src/App.jsx
import React, { useState } from "react";
import CreateSnippetForm from "./components/CreateSnippetform.jsx";
import ReceiveSnippetForm from "./components/ReceiveSnippetform.jsx";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
      className="flex items-center justify-center h-screen"
    >
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline">{error.message}</span>
        <button
          onClick={resetErrorBoundary}
          className="absolute top-0 bottom-0 right-0 px-4 py-3"
        >
          Try again
        </button>
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
      <div className="min-h-screen flex flex-col">  
        <header className="bg-gray-800 p-4 text-left">
          <h1 className="text-4xl font-bold text-white">CopyIt</h1>
        </header>
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          {!showReceiveForm && <CreateSnippetForm />}
          {showReceiveForm && <ReceiveSnippetForm />}
          <div className="mt-8 flex gap-4">
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded shadow"
              onClick={handleReceiveCopyClick}
            >
              Receive Copy
            </button>
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded shadow"
              onClick={handleCreateCopyClick}
            >
              Create Copy
            </button>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;




// import React, { useState } from "react";
// import CreateSnippetForm from "./components/CreateSnippetform.jsx";
// import ReceiveSnippetForm from "./components/ReceiveSnippetform.jsx";
// import { ErrorBoundary } from "react-error-boundary";

// function ErrorFallback({ error, resetErrorBoundary }) {
//   return (
//     <div
//       role="alert"
//       className="flex items-center justify-center h-screen"
//     >
//       <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
//         <strong className="font-bold">Error:</strong>
//         <span className="block sm:inline">{error.message}</span>
//         <button
//           onClick={resetErrorBoundary}
//           className="absolute top-0 bottom-0 right-0 px-4 py-3"
//         >
//           Try again
//         </button>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [showReceiveForm, setShowReceiveForm] = useState(false);

//   const handleReceiveCopyClick = () => {
//     setShowReceiveForm(true);
//   };

//   const handleCreateCopyClick = () => {
//     setShowReceiveForm(false);
//   };

//   return (
//     <ErrorBoundary FallbackComponent={ErrorFallback}>
//       <div className="min-h-screen flex flex-col items-center justify-center">
//         <header>
//           <h1 className="text-4xl font-bold text-white mb-8">
//             CopyIt
//           </h1>
//         </header>
//         {!showReceiveForm && <CreateSnippetForm />}
//         {showReceiveForm && <ReceiveSnippetForm />}
//         <div className="mt-8 flex gap-4">
//           <button
//             className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded shadow"
//             onClick={handleReceiveCopyClick}
//           >
//             Receive Copy
//           </button>
//           <button
//             className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded shadow"
//             onClick={handleCreateCopyClick}
//           >
//             Create Copy
//           </button>
//         </div>
//       </div>
//     </ErrorBoundary>
//   );
// }

// export default App;
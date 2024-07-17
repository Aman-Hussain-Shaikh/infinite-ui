import React from 'react';

const Alert = () => (
    <div className="bg-gray-100 p-6 min-h-screen text-blue-600">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Alert with Tailwind CSS and React JS</h1>
            <p className="mb-4">This page demonstrates how to create an alert using Tailwind CSS and React JS. Below is the code and its explanation.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">React Component Code</h2>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto">
                <code className="language-jsx">
{`
import React, { useState } from 'react';

const Alert = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{message}</span>
            <span 
                className="absolute top-0 bottom-0 right-0 px-4 py-3"
                onClick={() => setIsVisible(false)}
            >
                <svg 
                    className="fill-current h-6 w-6 text-red-500" 
                    role="button" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20"
                >
                    <title>Close</title>
                    <path d="M14.348 5.652a.5.5 0 010 .707L11.207 9.5l3.141 3.141a.5.5 0 01-.707.707L10.5 10.207l-3.141 3.141a.5.5 0 01-.707-.707L9.793 9.5 6.652 6.359a.5.5 0 11.707-.707L10.5 8.793l3.141-3.141a.5.5 0 01.707 0z" />
                </svg>
            </span>
        </div>
    );
};

export default Alert;
`}
                </code>
            </pre>

            <h2 className="text-xl font-semibold mt-6 mb-2">Explanation</h2>
            <p className="mb-4">In this code, we define a functional component <code>Alert</code> that takes a <code>message</code> as a prop. The component uses the <code>useState</code> hook to manage its visibility state. When the close button is clicked, it sets the visibility to false, hiding the alert.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Usage Example</h2>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto">
                <code className="language-jsx">
{`
import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './Alert';

const App = () => (
    <div className="max-w-xl mx-auto mt-10">
        <Alert message="This is an alert message!" />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
`}
                </code>
            </pre>

            <h2 className="text-xl font-semibold mt-6 mb-2">Explanation</h2>
            <p className="mb-4">In this example, we import and use the <code>Alert</code> component in our main <code>App</code> component. We render the <code>Alert</code> component with a message prop.</p>
        </div>
    </div>
);

export default Alert;

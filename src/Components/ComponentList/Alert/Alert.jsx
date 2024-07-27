import React, { useState } from 'react';

const AlertExample = ({ message }) => {
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

const Alert = () => (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen p-6 text-white">
        <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
            <header className="bg-gray-800 p-6">
                <h1 className="text-3xl font-bold mb-2">Using Alert in Tailwind CSS and React</h1>
                <p className="text-gray-300">Create elegant alert messages with ease</p>
            </header>

            <main className="p-6">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">React Component Code</h2>
                    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm text-gray-800">
                            {`import React, { useState } from 'react';

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

export default Alert;`}
                        </pre>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Explanation</h2>
                    <p className="text-gray-700">In this code, we define a functional component <code>Alert</code> that takes a <code>message</code> as a prop. The component uses the <code>useState</code> hook to manage its visibility state. When the close button is clicked, it sets the visibility to false, hiding the alert.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Usage Example</h2>
                    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm text-gray-800">
                            {`import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './Alert';

const App = () => (
    <div className="max-w-xl mx-auto mt-10">
        <Alert message="This is an alert message!" />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));`}
                        </pre>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Live Example</h2>
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <AlertExample message="This is a live example of an alert message!" />
                    </div>
                </section>
            </main>

            <footer className="bg-gray-100 p-4 mt-8 text-center text-gray-600">
                <p>Created using React and Tailwind CSS</p>
            </footer>
        </div>
    </div>
);

export default Alert;
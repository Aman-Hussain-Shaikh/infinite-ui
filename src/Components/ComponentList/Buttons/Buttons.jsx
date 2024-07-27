import React from 'react';

const buttonStyles = [
  { bg: 'bg-blue-500', hoverBg: 'hover:bg-blue-700', text: 'text-white', label: 'Primary' },
  { bg: 'bg-gray-500', hoverBg: 'hover:bg-gray-700', text: 'text-white', label: 'Secondary' },
  { bg: 'bg-green-500', hoverBg: 'hover:bg-green-700', text: 'text-white', label: 'Success' },
  { bg: 'bg-red-500', hoverBg: 'hover:bg-red-700', text: 'text-white', label: 'Danger' },
  { bg: 'bg-yellow-500', hoverBg: 'hover:bg-yellow-700', text: 'text-white', label: 'Warning' },
  { bg: 'bg-indigo-500', hoverBg: 'hover:bg-indigo-700', text: 'text-white', label: 'Info' },
  { bg: 'bg-purple-500', hoverBg: 'hover:bg-purple-700', text: 'text-white', label: 'Light' },
  { bg: 'bg-pink-500', hoverBg: 'hover:bg-pink-700', text: 'text-white', label: 'Dark' },
];

const ButtonDetail = ({ button }) => (
  <div className="mb-4">
    <button className={`p-2 rounded ${button.bg} ${button.hoverBg} ${button.text} transition duration-300`}>
      {button.label}
    </button>
    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
      Background: <span className="font-medium">{button.bg}</span><br />
      Hover Background: <span className="font-medium">{button.hoverBg}</span><br />
      Text Color: <span className="font-medium">{button.text}</span>
    </div>
  </div>
);

const ButtonDetailsList = () => (
  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {buttonStyles.map((button, index) => (
      <ButtonDetail key={index} button={button} />
    ))}
  </div>
);

const Buttons = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen p-6 text-white">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
        <header className="bg-gray-800 p-6">
          <h1 className="text-3xl font-bold mb-2">Using Buttons in Tailwind CSS and React</h1>
          <p className="text-gray-300">Create versatile and styled buttons with ease</p>
        </header>

        <main className="p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example Buttons Component</h2>
            <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm text-gray-800">
                {`// Buttons.js
import React from 'react';

const buttonStyles = [
  { bg: 'bg-blue-500', hoverBg: 'hover:bg-blue-700', text: 'text-white', label: 'Primary' },
  { bg: 'bg-gray-500', hoverBg: 'hover:bg-gray-700', text: 'text-white', label: 'Secondary' },
  // ... other button styles ...
];

const ButtonDetail = ({ button }) => (
  <div className="mb-4">
    <button className={\`p-2 rounded \${button.bg} \${button.hoverBg} \${button.text} transition duration-300\`}>
      {button.label}
    </button>
    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
      Background: <span className="font-medium">{button.bg}</span><br />
      Hover Background: <span className="font-medium">{button.hoverBg}</span><br />
      Text Color: <span className="font-medium">{button.text}</span>
    </div>
  </div>
);

const ButtonDetailsList = () => (
  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {buttonStyles.map((button, index) => (
      <ButtonDetail key={index} button={button} />
    ))}
  </div>
);

export default ButtonDetailsList;`}
              </pre>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Explanation</h2>
            <ul className="list-disc ml-6 mb-4 text-gray-700">
              <li><strong>Buttons Component:</strong> The Buttons component renders a list of styled buttons using Tailwind CSS classes.</li>
              <li><strong>ButtonDetail Component:</strong> The ButtonDetail component displays each button along with its corresponding styles.</li>
              <li><strong>Usage in ButtonDetailsList:</strong> The ButtonDetailsList component maps over an array of button styles and renders a ButtonDetail component for each one, displaying the button and its styles.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Live Example</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <ButtonDetailsList />
            </div>
          </section>
        </main>

        <footer className="bg-gray-100 p-4 mt-8 text-center text-gray-600">
          <p>Created with ❤️ using React and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default Buttons;

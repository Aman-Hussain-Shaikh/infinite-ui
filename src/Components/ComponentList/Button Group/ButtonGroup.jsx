import React from 'react';

const buttonGroups = [
  {
    buttons: [
      { label: 'Left', bg: 'bg-blue-500', hoverBg: 'hover:bg-blue-700', text: 'text-white' },
      { label: 'Middle', bg: 'bg-gray-500', hoverBg: 'hover:bg-gray-700', text: 'text-white' },
      { label: 'Right', bg: 'bg-green-500', hoverBg: 'hover:bg-green-700', text: 'text-white' },
    ],
  },
  {
    buttons: [
      { label: 'A', bg: 'bg-red-500', hoverBg: 'hover:bg-red-700', text: 'text-white' },
      { label: 'B', bg: 'bg-yellow-500', hoverBg: 'hover:bg-yellow-700', text: 'text-white' },
      { label: 'C', bg: 'bg-indigo-500', hoverBg: 'hover:bg-indigo-700', text: 'text-white' },
    ],
  },
];

const ButtonGroupDetail = ({ group }) => (
  <div className="mb-4">
    <div className="inline-flex rounded-md shadow-sm">
      {group.buttons.map((button, index) => (
        <button
          key={index}
          className={`p-2 ${index === 0 ? 'rounded-l' : ''} ${
            index === group.buttons.length - 1 ? 'rounded-r' : ''
          } ${button.bg} ${button.hoverBg} ${button.text} transition duration-300`}
        >
          {button.label}
        </button>
      ))}
    </div>
  </div>
);

const ButtonGroupDetailsList = () => (
  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {buttonGroups.map((group, index) => (
      <ButtonGroupDetail key={index} group={group} />
    ))}
  </div>
);

const ButtonGroup = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen p-6 text-white">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
        <header className="bg-gray-800 p-6">
          <h1 className="text-3xl font-bold mb-2">Using Button Groups in Tailwind CSS and React</h1>
          <p className="text-gray-300">Create grouped buttons with consistent styling</p>
        </header>

        <main className="p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example Button Group Component</h2>
            <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm text-gray-800">
                {`// ButtonGroup.js
import React from 'react';

const buttonGroups = [
  {
    buttons: [
      { label: 'Left', bg: 'bg-blue-500', hoverBg: 'hover:bg-blue-700', text: 'text-white' },
      { label: 'Middle', bg: 'bg-gray-500', hoverBg: 'hover:bg-gray-700', text: 'text-white' },
      { label: 'Right', bg: 'bg-green-500', hoverBg: 'hover:bg-green-700', text: 'text-white' },
    ],
  },
  {
    buttons: [
      { label: 'A', bg: 'bg-red-500', hoverBg: 'hover:bg-red-700', text: 'text-white' },
      { label: 'B', bg: 'bg-yellow-500', hoverBg: 'hover:bg-yellow-700', text: 'text-white' },
      { label: 'C', bg: 'bg-indigo-500', hoverBg: 'hover:bg-indigo-700', text: 'text-white' },
    ],
  },
];

const ButtonGroupDetail = ({ group }) => (
  <div className="mb-4">
    <div className="inline-flex rounded-md shadow-sm">
      {group.buttons.map((button, index) => (
        <button
          key={index}
          className={\`p-2 \${index === 0 ? 'rounded-l' : ''} \${index === group.buttons.length - 1 ? 'rounded-r' : ''} \${button.bg} \${button.hoverBg} \${button.text} transition duration-300\`}
        >
          {button.label}
        </button>
      ))}
    </div>
  </div>
);

const ButtonGroupDetailsList = () => (
  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {buttonGroups.map((group, index) => (
      <ButtonGroupDetail key={index} group={group} />
    ))}
  </div>
);

export default ButtonGroupDetailsList;`}
              </pre>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Explanation</h2>
            <ul className="list-disc ml-6 mb-4 text-gray-700">
              <li><strong>Button Group Component:</strong> The ButtonGroup component renders groups of buttons with consistent styling using Tailwind CSS classes.</li>
              <li><strong>ButtonGroupDetail Component:</strong> The ButtonGroupDetail component displays each group of buttons with their respective styles.</li>
              <li><strong>Usage in ButtonGroupDetailsList:</strong> The ButtonGroupDetailsList component maps over an array of button groups and renders a ButtonGroupDetail component for each one, displaying the grouped buttons and their styles.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Live Example</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <ButtonGroupDetailsList />
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

export default ButtonGroup;

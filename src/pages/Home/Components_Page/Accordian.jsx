import React from 'react';

const Accordion = () => (
    <div className="bg-gray-100 p-6 min-h-screen text-blue-600">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Accordion with Tailwind CSS and React JS</h1>
            <p className="mb-4">This page demonstrates how to create an accordion using Tailwind CSS and React JS. Below is the code and its explanation.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">React Component Code</h2>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto">
                <code className="language-jsx">
{`
import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b">
    <button
      className="w-full text-left px-4 py-2 focus:outline-none"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium">{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
    </button>
    {isOpen && (
      <div className="px-4 py-2 text-gray-700">
        {content}
      </div>
    )}
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: 'Accordion Item 1',
      content: 'Content for the first accordion item.'
    },
    {
      title: 'Accordion Item 2',
      content: 'Content for the second accordion item.'
    },
    {
      title: 'Accordion Item 3',
      content: 'Content for the third accordion item.'
    }
  ];

  return (
    <div className="max-w-md mx-auto mt-5">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;

`}
                </code>
            </pre>

            <h2 className="text-xl font-semibold mt-6 mb-2">Explanation</h2>
            <p className="mb-4">In this code, we define a functional component <code>Accordion</code> that takes <code>title</code> and <code>content</code> as props. The component uses the <code>useState</code> hook to manage its open/closed state. When the button is clicked, it toggles the state, showing or hiding the content accordingly.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Usage Example</h2>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto">
                <code className="language-jsx">
{`
import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';

const App = () => (
    <div className="max-w-xl mx-auto mt-10">
        <Accordion title="Section 1" content="Content for section 1" />
        <Accordion title="Section 2" content="Content for section 2" />
        <Accordion title="Section 3" content="Content for section 3" />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
`}
                </code>
            </pre>

            <h2 className="text-xl font-semibold mt-6 mb-2">Explanation</h2>
            <p className="mb-4">In this example, we import and use the <code>Accordion</code> component in our main <code>App</code> component. We render multiple <code>Accordion</code> components, each with different titles and content.</p>
        </div>
    </div>
);

export default Accordion;

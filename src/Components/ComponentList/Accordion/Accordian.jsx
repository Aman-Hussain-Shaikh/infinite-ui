import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b">
    <button
      className="w-full text-left px-3 py-2 sm:px-4 sm:py-3 focus:outline-none"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <span className="text-base sm:text-lg font-medium">{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
    </button>
    {isOpen && (
      <div className="px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-white-700">
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
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen p-6 text-white">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
        <header className="bg-gray-800 p-6">
          <h1 className="text-3xl font-bold mb-2">Accordion with Tailwind CSS and React JS</h1>
          <p className="text-gray-300">Create interactive accordions with ease</p>
        </header>

        <main className="p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">React Component Code</h2>
            <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="bg-gray-800 p-6 rounded-lg text-white-100">
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
    <div className="max-w-md mx-auto mt-5 text-white-100">
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
              </pre>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Usage Example</h2>
            <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="bg-gray-800 p-6 rounded-lg text-white-100">
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
              </pre>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Live Example</h2>
            <div className="bg-gray-800 p-6 rounded-lg text-white-100">
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
          </section>
        </main>

        <footer className="bg-gray-100 p-4 mt-8 text-center text-gray-600">
          <p>Created with ❤️ using React and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default Accordion;
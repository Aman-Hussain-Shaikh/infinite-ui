import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen p-6 text-white">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
        <header className="bg-gray-800 p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Drawer Example</h1>
          </header>
          <pre className="text-sm text-gray-800">
            {` <h1 className="text-3xl font-bold">Drawer Example</h1>
          <button
            onClick={toggleDrawer}
            className="text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
          >
            {isOpen ? 'Close Drawer' : 'Open Drawer'}
          </button>
        </header>

        <Transition
          show={isOpen}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-gray-200 p-6">
            <div className="text-right">
              <button
                onClick={toggleDrawer}
                className="text-gray-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                Close
              </button>
            </div>
            <div className="mt-4">
              <p className="text-gray-800">
                This is the content inside the drawer. You can add any content here.
              </p>
            </div>
          </div>
        </Transition>`}
          </pre>
          <div className="container mx-auto max-w-4xl bg-grey-600 rounded-lg shadow-2xl overflow-hidden">
          <button
            onClick={toggleDrawer}
            className="text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
          >
            {isOpen ? 'Close Drawer' : 'Open Drawer'}
          </button>

        <Transition
          show={isOpen}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-gray-200 p-6">
            <div className="text-right">
              <button
                onClick={toggleDrawer}
                className="text-gray-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                Close
              </button>
            </div>
            <div className="mt-4">
              <p className="text-gray-800">
                This is the content inside the drawer. You can add any content here.
              </p>
            </div>
          </div>
        </Transition>
        </div>
        <footer className="bg-gray-100 p-4 mt-8 text-center text-gray-600">
          <p>Created with ❤️ using React and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default Drawer;
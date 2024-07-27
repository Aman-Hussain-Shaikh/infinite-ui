import React from 'react';
import BottomNavigation from './BottomNavigation';

const BottomNavigationPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen p-6 text-white">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
        <header className="bg-gray-800 p-6">
          <h1 className="text-3xl font-bold mb-2">Using Bottom Navigation in Tailwind CSS and React</h1>
          <p className="text-gray-300">Create intuitive and user-friendly bottom navigation bars with ease</p>
        </header>

        <main className="p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example Bottom Navigation Component</h2>
            <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm text-gray-800">
                {`// BottomNavigation.js
import React from 'react';

const navItems = [
  { label: 'Home', icon: '🏠', href: '#home' },
  { label: 'Search', icon: '🔍', href: '#search' },
  { label: 'Notifications', icon: '🔔', href: '#notifications' },
  { label: 'Profile', icon: '👤', href: '#profile' },
];

const NavItem = ({ item }) => (
  <a href={item.href} className="flex flex-col items-center justify-center px-4 py-2 text-gray-800 dark:text-white">
    <span className="text-xl">{item.icon}</span>
    <span className="text-xs mt-1">{item.label}</span>
  </a>
);

const BottomNavigation = () => {
  return (
    <div className="bg-gray-800 text-white fixed bottom-0 left-0 right-0 shadow-lg">
      <div className="container mx-auto flex justify-around">
        {navItems.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
`}
              </pre>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Explanation</h2>
            <ul className="list-disc ml-6 mb-4 text-gray-700">
              <li><strong>Bottom Navigation Component:</strong> The BottomNavigation component renders a fixed navigation bar at the bottom of the screen with navigation items.</li>
              <li><strong>Tailwind CSS Classes:</strong> The component uses Tailwind CSS classes for styling. It applies background, text, and flex utilities for layout and appearance.</li>
              <li><strong>Usage in BottomNavigationPage:</strong> The BottomNavigationPage component demonstrates how to use the BottomNavigation component within a page layout.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Live Example</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <BottomNavigation />
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

export default BottomNavigationPage;

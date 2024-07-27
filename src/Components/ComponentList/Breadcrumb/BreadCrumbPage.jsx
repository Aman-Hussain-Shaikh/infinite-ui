import React from 'react';
import Breadcrumb from './breadcrumb';

const BreadcrumbsPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen p-6 text-white">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
        <header className="bg-gray-800 p-6">
          <h1 className="text-3xl font-bold mb-2">Using Breadcrumbs in Tailwind CSS and React</h1>
          <p className="text-gray-300">Create intuitive and user-friendly breadcrumbs navigation with ease</p>
        </header>

        <main className="p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example Breadcrumbs Component</h2>
            <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm text-gray-800">
                {`// Breadcrumbs.js
import React from 'react';

const breadcrumbItems = [
  { label: 'Home', href: '#' },
  { label: 'Library', href: '#' },
  { label: 'Data', href: '#' },
];

const BreadcrumbItem = ({ item, isLast }) => (
  <li className="inline-flex items-center">
    {!isLast ? (
      <>
        <a href={item.href} className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">{item.label}</a>
        <svg className="w-5 h-5 mx-2 text-gray-400 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.707a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
        </svg>
      </>
    ) : (
      <span className="text-gray-500 dark:text-gray-300">{item.label}</span>
    )}
  </li>
);

const Breadcrumbs = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {breadcrumbItems.map((item, index) => (
          <BreadcrumbItem key={index} item={item} isLast={index === breadcrumbItems.length - 1} />
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
`}
              </pre>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Explanation</h2>
            <ul className="list-disc ml-6 mb-4 text-gray-700">
              <li><strong>Breadcrumbs Component:</strong> The Breadcrumbs component renders a navigation bar with breadcrumb items. Each item is represented by a label and an optional link, styled using Tailwind CSS.</li>
              <li><strong>BreadcrumbItem Component:</strong> The BreadcrumbItem component is a reusable component for each breadcrumb item, accepting an item prop to display the label and link. It also handles the display of the separator icon.</li>
              <li><strong>Usage in BreadcrumbsPage:</strong> The BreadcrumbsPage component demonstrates how to use the Breadcrumbs component within a typical page layout.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Live Example</h2>
            <div className="bg-gray-100 p-6 rounded-lg text-white-100">
              <Breadcrumb />
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

export default BreadcrumbsPage;

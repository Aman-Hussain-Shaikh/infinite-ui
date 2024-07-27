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
        <a href={item.href} className=" hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">{item.label}</a>
        <svg className="w-5 h-5 mx-2 text-gray-400 dark:" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.707a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
        </svg>
      </>
    ) : (
      <span>{item.label}</span>
    )}
  </li>
);

const Breadcrumb = () => {
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

export default Breadcrumb;

import React from 'react';

const badges = [
  { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-400', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-blue-400', label: 'Default' },
  { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-500', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-gray-400', label: 'Dark' },
  { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-400', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-red-400', label: 'Red' },
  { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-400', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-green-400', label: 'Green' },
  { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-yellow-300', label: 'Yellow' },
  { bg: 'bg-indigo-100', text: 'text-indigo-800', border: 'border-indigo-400', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-indigo-400', label: 'Indigo' },
  { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-400', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-purple-400', label: 'Purple' },
  { bg: 'bg-pink-100', text: 'text-pink-800', border: 'border-pink-400', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-pink-400', label: 'Pink' },
];

const BadgeDetail = ({ badge }) => (
  <div className={`p-4 mb-4 border rounded-md shadow-sm ${badge.bg} ${badge.text} ${badge.border} ${badge.darkBg} ${badge.darkText}`}>
    <h3 className="font-bold">{badge.label}</h3>
    <p className="mt-2 text-sm">
      Background Color: <span className="font-medium">{badge.bg}</span><br />
      Text Color: <span className="font-medium">{badge.text}</span><br />
      Border Color: <span className="font-medium">{badge.border}</span><br />
      Dark Mode Background: <span className="font-medium">{badge.darkBg}</span><br />
      Dark Mode Text Color: <span className="font-medium">{badge.darkText}</span>
    </p>
  </div>
);

const BadgeDetailsList = () => (
  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {badges.map((badge, index) => (
      <BadgeDetail key={index} badge={badge} />
    ))}
  </div>
);

const Badge = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen p-6 text-white">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
        <header className="bg-gray-800 p-6">
          <h1 className="text-3xl font-bold mb-2">Using Badges in Tailwind CSS and React</h1>
          <p className="text-gray-300">Create informative and visually appealing badges with ease</p>
        </header>

        <main className="p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example Badge Component</h2>
            <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm text-gray-800">
                {`// Badge.js
import React from 'react';

const badges = [
  { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-400', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-blue-400', label: 'Default' },
  { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-500', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-gray-400', label: 'Dark' },
  // ... other badge types ...
];

const BadgeDetail = ({ badge }) => (
  <div className={\`p-4 mb-4 border rounded-md shadow-sm \${badge.bg} \${badge.text} \${badge.border} \${badge.darkBg} \${badge.darkText}\`}>
    <h3 className="font-bold">{badge.label}</h3>
    <p className="mt-2 text-sm">
      Background Color: <span className="font-medium">{badge.bg}</span><br />
      Text Color: <span className="font-medium">{badge.text}</span><br />
      Border Color: <span className="font-medium">{badge.border}</span><br />
      Dark Mode Background: <span className="font-medium">{badge.darkBg}</span><br />
      Dark Mode Text Color: <span className="font-medium">{badge.darkText}</span>
    </p>
  </div>
);

const BadgeDetailsList = () => (
  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {badges.map((badge, index) => (
      <BadgeDetail key={index} badge={badge} />
    ))}
  </div>
);

export default BadgeDetailsList;`}
              </pre>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Explanation</h2>
            <ul className="list-disc ml-6 mb-4 text-gray-700">
              <li><strong>Badge Component:</strong> The Badge component takes several props for styling: <code>bg</code>, <code>text</code>, <code>border</code>, <code>darkBg</code>, and <code>darkText</code>. It renders a div element styled with Tailwind CSS classes.</li>
              <li><strong>Tailwind CSS Classes:</strong> The component uses Tailwind CSS classes for styling. It applies different background, text, and border colors based on the props passed to it.</li>
              <li><strong>Usage in BadgeDetailsList:</strong> The BadgeDetailsList component maps over an array of badge objects and renders a BadgeDetail component for each one, displaying the styling details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Live Example</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <BadgeDetailsList />
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

export default Badge;
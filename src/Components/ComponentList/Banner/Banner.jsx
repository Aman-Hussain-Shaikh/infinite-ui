import React from 'react';

const banners = [
  { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-400', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-blue-400', label: 'Information' },
  { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-500', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-gray-400', label: 'Neutral' },
  { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-400', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-red-400', label: 'Warning' },
  { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-400', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-green-400', label: 'Success' },
  { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-yellow-300', label: 'Alert' },
  { bg: 'bg-indigo-100', text: 'text-indigo-800', border: 'border-indigo-400', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-indigo-400', label: 'Notice' },
  { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-400', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-purple-400', label: 'Important' },
  { bg: 'bg-pink-100', text: 'text-pink-800', border: 'border-pink-400', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-pink-400', label: 'Attention' },
];

const BannerDetail = ({ banner }) => (
  <div className={`p-4 mb-4 border rounded-md shadow-sm ${banner.bg} ${banner.text} ${banner.border} ${banner.darkBg} ${banner.darkText}`}>
    <h3 className="font-bold">{banner.label}</h3>
    <p className="mt-2 text-sm">
      Background Color: <span className="font-medium">{banner.bg}</span><br />
      Text Color: <span className="font-medium">{banner.text}</span><br />
      Border Color: <span className="font-medium">{banner.border}</span><br />
      Dark Mode Background: <span className="font-medium">{banner.darkBg}</span><br />
      Dark Mode Text Color: <span className="font-medium">{banner.darkText}</span>
    </p>
  </div>
);

const BannerDetailsList = () => (
  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {banners.map((banner, index) => (
      <BannerDetail key={index} banner={banner} />
    ))}
  </div>
);

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen p-6 text-white">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
        <header className="bg-gray-800 p-6">
          <h1 className="text-3xl font-bold mb-2">Using Banners in Tailwind CSS and React</h1>
          <p className="text-gray-300">Create informative and visually appealing banners with ease</p>
        </header>

        <main className="p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example Banner Component</h2>
            <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm text-gray-800">
                {`// Banner.js
import React from 'react';

const banners = [
  { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-400', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-blue-400', label: 'Information' },
  { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-500', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-gray-400', label: 'Neutral' },
  // ... other banner types ...
];

const BannerDetail = ({ banner }) => (
  <div className={\`p-4 mb-4 border rounded-md shadow-sm \${banner.bg} \${banner.text} \${banner.border} \${banner.darkBg} \${banner.darkText}\`}>
    <h3 className="font-bold">{banner.label}</h3>
    <p className="mt-2">
      Background Color: <span className="font-medium">{banner.bg}</span><br />
      Text Color: <span className="font-medium">{banner.text}</span><br />
      Border Color: <span className="font-medium">{banner.border}</span><br />
      Dark Mode Background: <span className="font-medium">{banner.darkBg}</span><br />
      Dark Mode Text Color: <span className="font-medium">{banner.darkText}</span>
    </p>
  </div>
);

const BannerDetailsList = () => (
  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {banners.map((banner, index) => (
      <BannerDetail key={index} banner={banner} />
    ))}
  </div>
);

export default BannerDetailsList;`}
              </pre>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Implementation Example</h2>
            <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm text-gray-800">
                {`import React from 'react';
import BannerDetailsList from './BannerDetailsList';

const App = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Banner Example</h1>
                <BannerDetailsList />
            </div>
        </div>
    );
};

export default App;`}
              </pre>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Explanation</h2>
            <ul className="list-disc ml-6 mb-4 text-gray-700">
              <li><strong>Banner Component:</strong> The Banner component takes an object with various properties to define the banner's appearance and label.</li>
              <li><strong>Tailwind CSS Classes:</strong> The component uses Tailwind CSS classes for styling, including background color, text color, border color, and dark mode styles.</li>
              <li><strong>Usage in App Component:</strong> The App component renders the BannerDetailsList component, which maps over the banners array and displays each banner with detailed information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Live Example</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <BannerDetailsList />
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

export default Banner;
import React from 'react';

// Mock data for table rows
const tableData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', status: 'Inactive' },
  { id: 3, name: 'James Brown', email: 'james.brown@example.com', role: 'User', status: 'Active' },
  { id: 4, name: 'Emily Davis', email: 'emily.davis@example.com', role: 'Admin', status: 'Active' },
  { id: 5, name: 'Michael Wilson', email: 'michael.wilson@example.com', role: 'User', status: 'Inactive' },
];

const DataTable = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen p-6 text-white">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
        <header className="bg-gray-800 p-6">
          <h1 className="text-3xl font-bold mb-2">Data Table in Tailwind CSS and React</h1>
          <p className="text-gray-300">Display tabular data with responsive and styled layout</p>
        </header>

        <main className="p-6">
        <pre className="text-sm text-gray-800">
    {`
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Users Table</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-100 border-separate border border-gray-200 rounded-lg">
                <thead className="bg-gray-200 text-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left">ID</th>
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left">Email</th>
                    <th className="px-6 py-3 text-left">Role</th>
                    <th className="px-6 py-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tableData.map((row) => (
                    <tr key={row.id} className="text-gray-800">
                      <td className="px-6 py-4">{row.id}</td>
                      <td className="px-6 py-4">{row.name}</td>
                      <td className="px-6 py-4">{row.email}</td>
                      <td className="px-6 py-4">{row.role}</td>
                      <td className="px-6 py-4">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        `}
        </pre>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Explanation</h2>
            <ul className="list-disc ml-6 mb-4 text-gray-700">
              <li><strong>Data Table Component:</strong> The DataTable component displays tabular data with a styled layout using Tailwind CSS classes.</li>
              <li><strong>Styling:</strong> Tailwind CSS classes are used for background colors, borders, padding, and margins to create a clean and responsive table design.</li>
              <li><strong>Usage in DataTable:</strong> The DataTable component maps over an array of data rows and renders table rows and cells for each item in the dataset.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Live Example</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-100 border-separate border border-gray-200 rounded-lg">
                  <thead className="bg-gray-200 text-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left">ID</th>
                      <th className="px-6 py-3 text-left">Name</th>
                      <th className="px-6 py-3 text-left">Email</th>
                      <th className="px-6 py-3 text-left">Role</th>
                      <th className="px-6 py-3 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {tableData.map((row) => (
                      <tr key={row.id} className="text-gray-800">
                        <td className="px-6 py-4">{row.id}</td>
                        <td className="px-6 py-4">{row.name}</td>
                        <td className="px-6 py-4">{row.email}</td>
                        <td className="px-6 py-4">{row.role}</td>
                        <td className="px-6 py-4">{row.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

export default DataTable;

import React from 'react';

// Mock data for calendar events
const events = [
  { id: 1, title: 'Event 1', date: '2024-07-20', description: 'Description for Event 1' },
  { id: 2, title: 'Event 2', date: '2024-07-25', description: 'Description for Event 2' },
  { id: 3, title: 'Event 3', date: '2024-07-28', description: 'Description for Event 3' },
];

// Function to format date in 'Month Day, Year' format
const formatDate = (dateString) => {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const EventCard = ({ event }) => (
  <div className="p-4 bg-white shadow rounded-lg mb-4">
    <h3 className="font-bold text-xl mb-2">{event.title}</h3>
    <p className="text-gray-600 mb-2">{formatDate(event.date)}</p>
    <p className="text-gray-800">{event.description}</p>
  </div>
);

const Calendar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen p-6 text-white">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
        <header className="bg-gray-800 p-6">
          <h1 className="text-3xl font-bold mb-2">Calendar Component in Tailwind CSS and React</h1>
          <p className="text-gray-300">Display calendar events with a responsive and styled layout</p>
        </header>

        <main className="p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Upcoming Events</h2>
            <div className="grid gap-4">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Explanation</h2>
            <ul className="list-disc ml-6 mb-4 text-gray-700">
              <li><strong>Calendar Component:</strong> The Calendar component displays upcoming events with a styled layout using Tailwind CSS classes.</li>
              <li><strong>EventCard Component:</strong> The EventCard component renders each event with its title, formatted date, and description.</li>
              <li><strong>Usage in Calendar:</strong> The Calendar component maps over an array of events and renders an EventCard component for each one, displaying the event details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Live Example</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="grid gap-4">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
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

export default Calendar;

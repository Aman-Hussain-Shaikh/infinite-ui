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

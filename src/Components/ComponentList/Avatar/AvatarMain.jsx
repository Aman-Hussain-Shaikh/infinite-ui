import React from 'react';
import Avatar from '../../../pages/Home/Components_Page/Avatar';

const AvatarMain = () => {
    return (
        <div className="bg-gray-100 p-6 min-h-screen text-blue-600">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Using Avatar in Tailwind CSS and React</h1>
                <p className="mb-4">Avatars are commonly used to represent users or profiles. Here is how to create a simple Avatar component using Tailwind CSS in a React application.</p>
                
                <h2 className="text-xl font-semibold mb-2">Example Avatar Component</h2>
                <pre className="bg-gray-800 text-white p-4 rounded mb-4">
                    {`//Avatar.js
import React from 'react';

const Avatar = ({ src, alt, size }) => {
    const avatarSize = size === 'small' ? 'h-10 w-10' : 'h-16 w-16';
    
    return (
        <img
           className={\`rounded-full \${avatarSize}\`}
            src={src}
            alt={alt}
        />
    );
};

export default Avatar;
// App.js
import React from 'react';
import Avatar from './Avatar';
const App = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Avatar Example</h1>
                <div className="flex items-center space-x-4">
                    <Avatar src="https://via.placeholder.com/150" alt="Avatar 1" size="small" />
                    <Avatar src="https://via.placeholder.com/150" alt="Avatar 2" size="large" />
                </div>
            </div>
        </div>
    );
};

export default App;

`}
                </pre>
                
                <h2 className="text-xl font-semibold mb-2">Implementation Example</h2>
                <pre className="bg-gray-800 text-white p-4 rounded mb-4">
                    {`import React from 'react';
import Avatar from './Avatar';

const AvatarMain = () => {
    return (
        <div className="p-6">
            <Avatar src="https://placekitten.com/200/200" alt="Kitten" size="small" />
            <Avatar src="https://placekitten.com/200/200" alt="Kitten" size="large" />
        </div>
    );
};

export default AvatarMain;`}
                </pre>
                
                <h2 className="text-xl font-semibold mb-2">Explanation</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li><strong>Avatar Component:</strong> The Avatar component takes three props: <code>src</code>, <code>alt</code>, and <code>size</code>. It renders an image with rounded corners and adjusts its size based on the <code>size</code> prop.</li>
                    <li><strong>Tailwind CSS Classes:</strong> The component uses Tailwind CSS classes for styling. It applies <code>rounded-full</code> for rounded corners and dynamic sizing classes based on the <code>size</code> prop.</li>
                    <li><strong>Usage in AvatarMain:</strong> In the AvatarMain component, two Avatar components are rendered with different image sources, alt text, and sizes (<code>small</code> and <code>large</code>).</li>
                </ul>
            </div>
        </div>
    );
};

export default AvatarMain;
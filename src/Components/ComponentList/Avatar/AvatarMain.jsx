import React from 'react';
<<<<<<< HEAD
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
=======
import Avatar from './Avatar';

const AvatarMain = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen p-6 text-white">
            <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
                <header className="bg-gray-800 p-6">
                    <h1 className="text-3xl font-bold mb-2">Using Avatar in Tailwind CSS and React</h1>
                    <p className="text-gray-300">Create elegant user representations with ease</p>
                </header>

                <main className="p-6">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example Avatar Component</h2>
                        <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                            <pre className="text-sm text-gray-800">
                                {`// Avatar.js
>>>>>>> component
import React from 'react';

const Avatar = ({ src, alt, size }) => {
    const avatarSize = size === 'small' ? 'h-10 w-10' : 'h-16 w-16';
    
    return (
        <img
<<<<<<< HEAD
           className={\`rounded-full \${avatarSize}\`}
=======
           className={\`rounded-full \${avatarSize} object-cover\`}
>>>>>>> component
            src={src}
            alt={alt}
        />
    );
};

<<<<<<< HEAD
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
=======
export default Avatar;`}
                            </pre>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Implementation Example</h2>
                        <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center space-x-6">
                            <div className="text-center">
                                <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" size="small" />
                                <p className="mt-2 text-sm text-gray-600">Small Avatar</p>
                            </div>
                            <div className="text-center">
                                <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" size="large" />
                                <p className="mt-2 text-sm text-gray-600">Large Avatar</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Explanation</h2>
                        <ul className="list-disc ml-6 space-y-2 text-gray-700">
                            <li><strong>Avatar Component:</strong> Takes <code>src</code>, <code>alt</code>, and <code>size</code> props. Renders a rounded image with dynamic sizing.</li>
                            <li><strong>Tailwind CSS Classes:</strong> Utilizes <code>rounded-full</code> for circular shape and dynamic sizing based on the <code>size</code> prop.</li>
                            <li><strong>Usage:</strong> Demonstrated with two Avatar components of different sizes and images.</li>
                        </ul>
                    </section>
                </main>

                <footer className="bg-gray-100 p-4 mt-8 text-center text-gray-600">
                    <p>Created  using React and Tailwind CSS</p>
                </footer>
>>>>>>> component
            </div>
        </div>
    );
};

export default AvatarMain;
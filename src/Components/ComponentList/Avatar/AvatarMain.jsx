import React from 'react';

import Avatar from '../../ComponentList/Avatar/Avatar';


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

const Avatar = ({ src, alt, size }) => {
    const avatarSize = size === 'small' ? 'h-10 w-10' : 'h-16 w-16';
    
    return (
        <img

           className={\`rounded-full \${avatarSize} object-cover\`}

            src={src}
            alt={alt}
        />
    );
};

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

            </div>
        </div>
    );
};

export default AvatarMain;
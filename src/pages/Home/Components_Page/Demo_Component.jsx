import React, { useState } from 'react';
import Alert from './Alert';
import Accordion from './Accordian';
import AvatarMain from './AvatarMain';
const components = [
    {
        name:"Accordion",
    },
    {
        name:"Alert",
    },
    {
        name:"Avatar",
    },
    {
        name:"Badge",
    },
    {
        name:"Banner",
    },
    {
        name:"Bottom Navigation",
    },
    {
        name:"Breadcrumb",
    },
    {
        name:"Buttons",
    },
    {
        name:"Button Group",
    },
    {
        name:"Calendar",
    },
    {
        name:"Data Table",
    },
    {
        name:"Drawer",
    },
]


const Demo_Component = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'Accordion':
                return <Accordion title="Section 1" content="Content for section 1" />;
            case 'Alert':
                return <Alert message="This is an alert message!" />;
            case 'Avatar':
                return <AvatarMain message="This is avatar!" />;
            // Add cases for other components here
            default:
                return <div>Select a component to view its code and details.</div>;
        }
    };

    return (
        <>
            <div className="flex">
                <div className="flex flex-col h-[84vh] border shadow-2xl border-black items-center bg-white ml-12 mt-4 w-56 rounded-lg">
                    <div className="flex flex-col items-center h-full">
                        <h1 className="text-indigo-500 font-bold my-2 border-[7px] px-5 py-2 border-blue-200">Components</h1>
                        <div className="h-full overflow-y-auto scrollbar-hide">
                            {components.map((component, index) => (
                                <div
                                    key={index}
                                    className="w-full"
                                    onClick={() => setSelectedComponent(component.name)}
                                >
                                    <h1 className="text-blue-500 my-2 cursor-pointer">{component.name}</h1>
                                    <hr className="w-full border border-teal-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-teal-600 border border-black shadow-2xl w-full h-[84vh] mt-4 ml-5 mr-12 rounded-lg p-4">
                    <h1>Component Code and Details</h1>
                    <div className="mt-4">
                        {renderComponent()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Demo_Component
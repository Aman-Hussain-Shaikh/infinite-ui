import React from 'react';

const Avatar = ({ src, alt, size }) => {
    const avatarSize = size === 'small' ? 'h-10 w-10' : 'h-16 w-16';
    
    return (
        <img
           className={`rounded-full ${avatarSize}`}
            src={src}
            alt={alt}
        />
    );
};

export default Avatar;

import React from 'react';

interface ContainerProps {
    children: React.ReactNode; // Expecting children to be passed in
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            {children}
        </div>
    );
};

export default Container;
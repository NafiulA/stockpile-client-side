import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 text-blue-600 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
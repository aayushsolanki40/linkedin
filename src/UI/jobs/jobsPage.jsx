import React, { useEffect } from 'react';

const JobsPage = () => {
    useEffect(() => {
        document.title = "Jobs | LinkedIn";
    }, []);
    return (
        <div>
            Jobs Page
        </div>
    );
}

export default JobsPage;

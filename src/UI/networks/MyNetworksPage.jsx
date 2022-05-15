import React, { useEffect } from 'react';

const MyNetworksPage = () => {
    useEffect(() => {
        document.title = "My Network | LinkedIn";
    }, []);
    return (
        <div>
            My Networks
        </div>
    );
}

export default MyNetworksPage;

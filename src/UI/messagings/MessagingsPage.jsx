import React, { useEffect } from 'react';

const MessagingsPage = () => {
    useEffect(() => {
        document.title = "Messagings | LinkedIn";
    }, []);
    return (
        <div>
            Messagings Page
        </div>
    );
}

export default MessagingsPage;

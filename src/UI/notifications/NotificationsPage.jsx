import React, { useEffect } from 'react';

const NotificationsPage = () => {
    useEffect(() => {
        document.title = "Notifications | LinkedIn";
    }, []);
    return (
        <div>
            Notifications Page
        </div>
    );
}

export default NotificationsPage;

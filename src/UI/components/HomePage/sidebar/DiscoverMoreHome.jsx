import React from 'react';

const DiscoverMoreHome = () => {
    return (
        <div className='card DiscoverMore_card'>
            <span className="DiscoverMoreHome_ReacentText">Recent</span>
            <div className="DiscoverMoreHome_TitleBox">
                <div className="DiscoverMoreHome_TitleIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                        <path d="M2 2v9a3 3 0 003 3h6a3 3 0 003-3V2zm8.5 1.5a1 1 0 11-1 1 1 1 0 011-1zm-5 0a1 1 0 11-1 1 1 1 0 011-1zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V7h8z"></path>
                    </svg>
                </div>
                <span className="DiscoverMoreHome_Title">Google Cloud Next '21</span>
            </div>
            <div className="DiscoverMoreHome_ListBox">
                <div className="DiscoverMoreHome_List">
                    <span className="DiscoverMoreHome_ListText">Groups</span>
                </div>
                <div className="DiscoverMoreHome_List">
                    <span className="DiscoverMoreHome_ListText">Events</span>
                    <span className="DiscoverMoreHome_ListAddIcon">+</span>
                </div>
                <div className="DiscoverMoreHome_List">
                    <span className="DiscoverMoreHome_ListText">Followed Hashtags</span>
                </div>
            </div>
        </div>
    );
}

export default DiscoverMoreHome;

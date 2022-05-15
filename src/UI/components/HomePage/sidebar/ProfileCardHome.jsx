import React from 'react';

const ProfileCardHome = () => {
    return (
        <div className="card ProfileCardHome_card">
            <div className="ProfileCardHome_bgImage">

            </div>
            <div className="ProfileCardHome_ProfileImage_box">
                <div className="ProfileCardHome_profileImage">
                    <img className='ProfileCardHome_profile' src="https://media-exp1.licdn.com/dms/image/C5603AQEvBNEf4inwiw/profile-displayphoto-shrink_100_100/0/1616721142148?e=1657756800&v=beta&t=wljopfQQ1QMI_66lL-uhVq8vSAcJVD3ugRo9iR1pwrM"/>
                </div>
                <div className="ProfileCardHome_PersonDetails">
                    <span className="ProfileCardHome_PersonName">Aayush Rathod</span>
                    <span className="ProfileCardHome_PersonWork">Full Stack MERN and Laravel Developer</span>
                </div>
            </div>
            <hr/>
            <div className="ProfileCardHome_stats_box">
                <div className="ProfileCardHome_stats_row">
                    <span className="ProfileCardHome_stats_text">Who viewed your profile</span>
                    <span className="ProfileCardHome_stats_num">60</span>
                </div>
                <div className="ProfileCardHome_stats_row">
                    <span className="ProfileCardHome_stats_text">Impression of your post</span>
                    <span className="ProfileCardHome_stats_num">9</span>
                </div>
            </div>
            <hr/>
            <div className="ProfileCardHome_exclusiveBoc">
                <span className="ProfileCardHome_exclusive_title">Access exclusive tools & insights</span>
                <div className="ProfileCardHome_exclusive_subTitleBox">
                    <div className="ProfileCardHome_exclusive_subtitleIcom">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e"></path>
                            <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z" fill="#e7a33e"></path>
                        </svg>
                    </div>
                    <span className="ProfileCardHome_exclusive_subtitle">Get Hired Faster, Try Premium Free</span>
                </div>
            </div>
            <hr/>
            <div className="ProfileCardHome_myItemBox">
                <div className="ProfileCardHome_myItemIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                    <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
                    </svg>
                </div>
                <span className="ProfileCardHome_myItemText">My Items</span>
            </div>
        </div>
    );
}

export default ProfileCardHome;

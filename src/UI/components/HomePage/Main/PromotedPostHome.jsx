import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const PromotedPostHome = () => {
    const [VideoSrc, setVideoSrc] = useState("https://dms.licdn.com/playlist/C5610AQHAPjUfs_ubfw/mp4-720p-30fp-crf28/0/1648824942094?e=1652202000&v=beta&t=6gW4-OmICGBxZqjNCA4nTS3GmPdL0wLMJ_iXHvADXt4");
    return (
        <div className="card PromotedPost_card">
            <div className='PromotedPost_head_box'>
                <div className="PromotedPost_icon">
                    <img src="https://media-exp1.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_100_100/0/1612205615891?e=1660176000&v=beta&t=Z51ybUs19PBmhvOYu053c5DOR0SEIn29jrdagEYLImA"/>
                </div>
                <div className="PromotedPost_head_title_box">
                    <span className="PromotedPost_title">Amazon</span>
                    <span className="PromotedPost_followers_count">25,470,565 followers</span>
                    <span className="PromotedPost_title_tag">Promoted</span>
                </div>
            </div>
            <div className="PromotedPost_description_box">
                <span className="PromotedPost_description">
                    AWS Activate is a great way to build, migrate & experiment. Founders can focus on launching big ideas with more support, & less risk.
                </span>
            </div>
            <div className="PromotedPost_player_box">
                <ReactPlayer 
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U&rel=0'
                    width={'inherit'}
                    controls={true}
                />
            </div>
        </div>
    );
}

export default PromotedPostHome;

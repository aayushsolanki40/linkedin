import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Popover, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMenuTabIndex } from '../../../features/header/MenuTabIndex';

const HeaderProfile = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div>
             <div 
                className="navicon" 
                aria-describedby={id}  onClick={handleClick}
             >
                <img className="profileImage" src="https://media-exp1.licdn.com/dms/image/C5603AQEvBNEf4inwiw/profile-displayphoto-shrink_100_100/0/1616721142148?e=1657152000&v=beta&t=w10QGY-75SjwIZVSz7cZYBA8IXSIyNNQC8J6OzJuAOU"/>
                <span className="navicon-text"><span>Me</span> <svg height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z"/></svg></span>
            </div>
            <Popover
                id={id}
                className="profile_menu_card"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                disableScrollLock={true}
            >
            <Row className="profile_avatar_header_row">
                <Col xs={3}>
                    <div className='profile_avatar_header_menu'>
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQEvBNEf4inwiw/profile-displayphoto-shrink_100_100/0/1616721142148?e=1657756800&v=beta&t=wljopfQQ1QMI_66lL-uhVq8vSAcJVD3ugRo9iR1pwrM"/>
                    </div>
                </Col>
                <Col xs={9}>
                    <Typography className="profile_avatar_header_title" fontSize={14} flexWrap={true} fontWeight={600}>Aayush Rathod</Typography>
                    <Typography className="profile_avatar_header_description" flexWrap={true} fontSize={12}>Full Stack Web Developer</Typography>
                </Col>
                <Col xs={12}>
                    <span onClick={()=>dispatch(setMenuTabIndex('/in/aayush-rathod'))} className='view_profile_btn_profile'>View Profile</span>
                </Col>
            </Row>
            <hr/>
            <section className='headerProfileSection'>
            <span className='headerProfileLiHead'>Account</span>
            <ul className='headerProfileLi'>
                <li>Settings & Privacy</li>
                <li>Help</li>
                <li>Language</li>
            </ul>
            </section>
            <hr/>
            <section className='headerProfileSection'>
            <span className='headerProfileLiHead'>Manage</span>
            <ul className='headerProfileLi'>
                <li>Posts & Activity</li>
                <li>Job Posting Account</li>
            </ul>
            </section>
            <hr/>
            <section className='headerProfileSection'>
            <ul className='headerProfileLi'>
                <li>Sign Out</li>
            </ul>
            </section>
            </Popover>
        </div>
    );
}

export default HeaderProfile;

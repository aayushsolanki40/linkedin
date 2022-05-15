import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Headerseach from './Header/HeaderSeach';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import HeaderProfile from './Header/HeaderProfile';
import WorkMenuDrawer from './Header/WorkMenuDrawer';

const Header = () => {
    const MenuTabIndex = useSelector((state) => state.MenuTabIndex.value)
    const navigate = useNavigate();

    return (
        <>
        <Container className='header_outer' fluid>
            <Container className="global-nav__content">
                <Row >
                    <Col className="header-col d-flex">
                        <a  className="global-nav__branding" data-link-to="feed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" className="global-nav__logo">
                            <title>LinkedIn</title>
                            <g>
                                <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
                            </g>
                            </svg>
                        </a>
                    <Headerseach/>
                    <nav className="global-nav__nav" aria-label="Primary Navigation">
                        <ul  className="icon_header_list">
                            <li className={MenuTabIndex==='/feed/'?'active':''}>
                                <div className="navicon" onClick={() => navigate('/feed/')}>
                                <span className='notification_badge'>1</span>
                                <svg baseProfile="tiny" height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M12,3c0,0-6.186,5.34-9.643,8.232C2.154,11.416,2,11.684,2,12c0,0.553,0.447,1,1,1h2v7c0,0.553,0.447,1,1,1h3  c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.447,1-1v-7h2c0.553,0,1-0.447,1-1c0-0.316-0.154-0.584-0.383-0.768  C18.184,8.34,12,3,12,3z"/></svg>
                                    <span>Home</span>
                                </div>
                            </li>
                            <li className={MenuTabIndex==='/mynetwork/'?'active':''}>
                                <div className="navicon" onClick={() => navigate('/mynetwork/')}>
                                <span className='notification_badge'>1</span>
                                <svg enableBackground="new 0 0 32 32" height="32px" id="svg2" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnssvg="http://www.w3.org/2000/svg"><g id="background"><rect fill="none" height="32" width="32"/></g><g id="group_x5F_half_x5F_security"><path d="M16,14c1.657,0,3-1.343,3-3s-1.343-3-3-3s-3,1.343-3,3S14.343,14,16,14z M24,8c1.657,0,3-1.343,3-3s-1.343-3-3-3   s-3,1.343-3,3S22.343,8,24,8z M12.023,14C11.39,13.162,11,12.131,11,11c0-0.343,0.035-0.677,0.101-1C8.968,10,4,10,4,10s-2,0-2,2   c0,0.778,0,12,0,12h6v-6c0-4,4-4,4-4H12.023z M8,8c1.657,0,3-1.343,3-3S9.657,2,8,2S5,3.343,5,5S6.343,8,8,8z M30,17.349V12   c0,0,0-2-2-2h-7.101C20.965,10.323,21,10.657,21,11c0,1.131-0.39,2.162-1.022,3H20c0.477,0,0.878,0.073,1.246,0.173   c-1.457,0.288-2.787,0.928-3.898,1.827C15.008,16,12,16,12,16s-2,0-2,2c0,0.778,0,12,0,12h7.349c1.545,1.248,3.51,1.999,5.651,2   c4.971-0.002,8.998-4.029,9-9C31.999,20.858,31.248,18.894,30,17.349z M23,29.883c-3.801-0.009-6.876-3.084-6.885-6.883   c0.009-3.801,3.084-6.876,6.885-6.885c3.799,0.009,6.874,3.084,6.883,6.885C29.874,26.799,26.799,29.874,23,29.883z"/><path d="M26.144,22c0.008-0.131,0.014-0.267,0.014-0.409c-0.006-0.678-0.088-1.492-0.556-2.259   c-0.457-0.779-1.438-1.36-2.602-1.333c-1.165-0.027-2.148,0.554-2.605,1.333c-0.47,0.767-0.552,1.581-0.556,2.259   c0,0.143,0.006,0.278,0.014,0.409H19v5h8v-5H26.144z M21.837,21.591c-0.004-0.478,0.093-0.958,0.254-1.198   c0.173-0.227,0.27-0.366,0.909-0.394c0.637,0.027,0.73,0.165,0.904,0.394c0.162,0.24,0.259,0.723,0.253,1.198   c0,0.145-0.008,0.28-0.019,0.409h-2.282C21.846,21.869,21.837,21.732,21.837,21.591z"/></g></svg>
                                    <span>My Network</span>
                                </div>
                            </li>
                            <li className={MenuTabIndex==='/jobs/'?'active':''}>
                                <div className="navicon" onClick={() => navigate('/jobs/')}>
                                    <span className='notification_badge'>10+</span>
                                    <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><g id="Interface-Solid"><g id="work-business-solid-briefcase"><path d="M15,2a4.10036,4.10036,0,0,0-4,4.18506v.03711h8V6.18506A4.10036,4.10036,0,0,0,15,2Z" fill="none"/><path d="M26,6.22217H24V29.96289c0,.01318-.007.024-.00751.03711H26a4.00458,4.00458,0,0,0,4-4V10.22217A4.00458,4.00458,0,0,0,26,6.22217Z"/><path d="M6,6.22217H4a4.00458,4.00458,0,0,0-4,4V26a4.00458,4.00458,0,0,0,4,4H6.00751C6.007,29.98694,6,29.97607,6,29.96289Z"/><path d="M22,6.22217H21V6c0-.02106-.01074-.0387-.012-.05945A6.08837,6.08837,0,0,0,15,0,6.08837,6.08837,0,0,0,9.012,5.94055C9.01074,5.9613,9,5.97894,9,6v.22217H8V29.96289c0,.01318-.007.024-.00751.03711h14.015C22.007,29.98694,22,29.97607,22,29.96289Zm-3,0H11V6.18506A4.10036,4.10036,0,0,1,15,2a4.10036,4.10036,0,0,1,4,4.18506Z"/></g></g></g></svg>
                                    <span>Jobs</span>
                                </div>
                            </li>
                            <li className={MenuTabIndex==='/messaging/'?'active':''}>
                                <div className="navicon" onClick={() =>navigate('/messaging/')}>
                                <span className='notification_badge'>1</span>
                                <svg height="8.4666mm"  version="1.1" viewBox="0 0 846.66 846.66" width="8.4666mm" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="Layer_x0020_1"><path className="fil0" d="M652.73 649.32l0 166.42c0,18.73 -22.85,27.54 -35.55,14.29l-196.15 -180.71 -165.38 0c-51.56,0 -93.66,-42.1 -93.66,-93.66l0 -360.47c0,-51.55 42.1,-93.65 93.66,-93.65l469.97 0c51.56,0 93.66,42.09 93.66,93.65l0 360.47c0,51.56 -42.1,93.66 -93.66,93.66l-72.89 0zm-334.34 -322.96c19.53,0 35.36,15.83 35.36,35.36 0,19.53 -15.83,35.36 -35.36,35.36 -19.53,0 -35.36,-15.83 -35.36,-35.36 0,-19.53 15.83,-35.36 35.36,-35.36zm344.49 0c19.53,0 35.36,15.83 35.36,35.36 0,19.53 -15.83,35.36 -35.36,35.36 -19.53,0 -35.36,-15.83 -35.36,-35.36 0,-19.53 15.83,-35.36 35.36,-35.36zm-114.83 0c19.53,0 35.36,15.83 35.36,35.36 0,19.53 -15.83,35.36 -35.36,35.36 -19.53,0 -35.36,-15.83 -35.36,-35.36 0,-19.53 15.83,-35.36 35.36,-35.36zm-114.83 0c19.53,0 35.36,15.83 35.36,35.36 0,19.53 -15.83,35.36 -35.36,35.36 -19.53,0 -35.36,-15.83 -35.36,-35.36 0,-19.53 15.83,-35.36 35.36,-35.36zm-312.18 190.39c27.16,0 27.16,41.31 0,41.31 -51.56,0 -93.66,-42.1 -93.66,-93.66l0 -360.47c0,-51.55 42.1,-93.65 93.66,-93.65l469.98 0c27.16,0 27.16,41.3 0,41.3l-469.98 0c-28.75,0 -52.35,23.6 -52.35,52.35l0 360.47c0,28.75 23.6,52.35 52.35,52.35zm490.39 251.94l0 -140.03c0,-11.4 9.25,-20.65 20.65,-20.65l93.54 0c28.75,0 52.36,-23.6 52.36,-52.35l0 -360.47c0,-28.75 -23.61,-52.35 -52.36,-52.35l-469.97 0c-28.76,0 -52.36,23.6 -52.36,52.35l0 360.47c0,28.75 23.6,52.35 52.36,52.35l173.38 0.05c4.99,0 10,1.79 13.96,5.44l168.44 155.19z"/></g></svg>
                                    <span>Messaging</span>
                                </div>
                            </li>
                            <li className={MenuTabIndex==='/notifications/'?'active':''}>
                                <div className="navicon" onClick={() => navigate('/notifications/')}>
                                    <span className='notification_badge'>1</span>
                                    <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><title/><path d="M440.08,341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118,0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3,3,0,0,1-.82-.67C306.6,51.49,282.82,32,256,32s-50.59,19.49-59.28,48.56a3.13,3.13,0,0,1-.81.65c-56.38,23.21-83.78,67.74-83.78,136.14,0,75.36-13.29,91.42-35.31,118-1.6,1.93-3.23,3.89-4.89,5.93a35.16,35.16,0,0,0-4.65,37.62c6.17,13,19.32,21.07,34.33,21.07H410.5c14.94,0,28-8.06,34.19-21A35.17,35.17,0,0,0,440.08,341.31Z"/><path d="M256,480a80.06,80.06,0,0,0,70.44-42.13,4,4,0,0,0-3.54-5.87H189.12a4,4,0,0,0-3.55,5.87A80.06,80.06,0,0,0,256,480Z"/></svg>
                                    <span>Notifications</span>
                                </div>
                            </li>
                            <li className={MenuTabIndex==='/profile'?'active':''}>
                                <HeaderProfile/>
                            </li>
                            <div className="vertical_lines"></div>
                            <li className={MenuTabIndex==='/work'?'active':''}>
                                <WorkMenuDrawer/>
                            </li>
                            <li>
                                
                            </li>
                        </ul>
                    </nav>
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    );
}

export default Header;

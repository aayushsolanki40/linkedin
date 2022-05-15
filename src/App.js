import React, { useEffect } from 'react';
import './App.css';
import Homepage from './UI/home/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Header from './UI/components/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MyNetworksPage from './UI/networks/MyNetworksPage';
import JobsPage from './UI/jobs/jobsPage';
import NotificationsPage from './UI/notifications/NotificationsPage';
import MessagingsPage from './UI/messagings/MessagingsPage';
import { useDispatch } from 'react-redux'
import { setMenuTabIndex } from './features/header/MenuTabIndex';

function App() {
  const navigate = useNavigate();
  let pathName = window.location.pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if(pathName==='/'){
      navigate('/feed/');
      pathName='/feed';
    }
  }, []);
  console.log(pathName);
  dispatch(setMenuTabIndex(pathName));
  return (
    <div className="App">
      <Header/>
      <div className='mainPageHome'>
        <Routes>
          <Route path="/feed" element={<Homepage />} />
          <Route path="/mynetwork" element={<MyNetworksPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/messaging" element={<MessagingsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

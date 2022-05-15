import React, {useEffect} from 'react';
import { Container } from 'react-bootstrap';
import AsidePromoteCard from '../components/HomePage/Aside/AsidePromoteCard';
import LinkedNewsHome from '../components/HomePage/Aside/LinkedNewsHome';
import PromotedPostHome from '../components/HomePage/Main/PromotedPostHome';
import StartPageHome from '../components/HomePage/Main/StartPageHome';
import DiscoverMoreHome from '../components/HomePage/sidebar/DiscoverMoreHome';
import ProfileCardHome from '../components/HomePage/sidebar/ProfileCardHome';

const Homepage = () => {
    useEffect(() => {
        document.title = "Feed | LinkedIn";
    }, []);

    return (
        <>
            <Container className="homepage_container">
                <div className="scaffold-layout scaffold_layout_homepage">
                    <div className="scaffold-layout_sidebar">
                        <ProfileCardHome/>
                        <DiscoverMoreHome/>
                    </div>
                    <main id="main" className="feed-identity-module artdeco-card overflow-hidden mb2">
                        <StartPageHome/>
                        <hr/>
                        <PromotedPostHome/>
                        <PromotedPostHome/>
                        <PromotedPostHome/>
                        <PromotedPostHome/>
                        <PromotedPostHome/>
                        <PromotedPostHome/>
                        <hr/>
                    </main>
                    <aside className="scaffold-layout__aside">
                        <LinkedNewsHome/>
                        <AsidePromoteCard/>   
                    </aside>
                </div>
            </Container>
        </>
    );
}

export default Homepage;

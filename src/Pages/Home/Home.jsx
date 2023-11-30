import HomeQuestions from 'Components/home/HomeQuestions/HomeQuestions';
import HomeRequirement from 'Components/home/HomeRequirement/HomeRequirement';
import NewPetsSection from 'Components/home/HomeSections/NewPetsSection/NewPetsSection';
import InformationSection from 'Components/home/HomeSections/InformationSection/InformationSection';
import MatchSection from 'Components/home/HomeSections/MatchSection/MatchSection';
import './home.css';
import { useState, useEffect } from 'react';

const Home = () => {

    const [showSection, setShowSection] = useState(false);

    useEffect(() => {
        const onChange = (entries) => {
            const el = entries[0];
            if (el.isIntersecting) {
                setShowSection(true);
            }
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: "-100px"
        });
        observer.observe(document.querySelector('.questions-container'))
    });

    return (
        <main className='main-container'>
            <HomeRequirement />
            <HomeQuestions />
            {showSection ? (
                <NewPetsSection />
            ) : null}
            <InformationSection />
            <MatchSection />
        </main>
    )
};

export default Home;

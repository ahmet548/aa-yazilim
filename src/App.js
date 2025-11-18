import React, { useState, useEffect } from 'react';
import './App.css';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
    const [isNavScrolled, setIsNavScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);

    // General scroll handler
    useEffect(() => {
        const handleScroll = () => {
            setIsNavScrolled(window.scrollY > 50);
            setIsScrollToTopVisible(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll for anchor links
    useEffect(() => {
        const smoothScroll = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            // Use a try-catch block to prevent errors if the targetId is not a valid selector
            try {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            } catch (error) {
                console.error("Could not scroll to element:", error);
            }

            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        // Attach event listeners to all anchor links starting with '#'
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => anchor.addEventListener('click', smoothScroll));

        return () => {
            anchors.forEach(anchor => anchor.removeEventListener('click', smoothScroll));
        };
    }, [isMobileMenuOpen]); // Re-run if the mobile menu state changes

    // Intersection Observer for fade-in and counter animations
    useEffect(() => {
        const animateCounter = (element, target) => {
            let current = 0;
            const suffix = target === 98 ? '%' : '';
            const isPlus = target !== 98;
            const increment = target / 100;
            const duration = 2000;
            const stepTime = Math.max(1, duration / (target / increment));

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target + (isPlus ? '+' : suffix);
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current) + (isPlus ? '+' : suffix);
                }
            }, stepTime);
        };

        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    if (entry.target.classList.contains('counter') && !entry.target.dataset.animated) {
                        const target = parseInt(entry.target.getAttribute('data-target'));
                        animateCounter(entry.target, target);
                        entry.target.dataset.animated = true; // Prevent re-animating
                    }
                    // Optional: unobserve after animation to save resources
                    // obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elementsToAnimate = document.querySelectorAll('.fade-in, .counter');
        elementsToAnimate.forEach(el => observer.observe(el));

        return () => {
            elementsToAnimate.forEach(el => observer.unobserve(el));
        };
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close if the menu is open and the click is not inside the nav container
            if (isMobileMenuOpen && !event.target.closest('.nav-container')) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobileMenuOpen]);

    // Console message for developers
    useEffect(() => {
        console.log('%c🚀 AA YAZILIM', 'font-size: 24px; font-weight: bold; color: #A41018;');
        console.log('%cGeleceği Kodluyoruz!', 'font-size: 14px; color: #3A7DFF;');
        console.log('%c📧 info@aayazilim.com | 📞 0530 416 23 55', 'font-size: 12px; color: #7A7A7A;');
    }, []);

    return (
        <>
            <Navbar 
                isNavScrolled={isNavScrolled} 
                isMobileMenuOpen={isMobileMenuOpen} 
                setIsMobileMenuOpen={setIsMobileMenuOpen} 
            />
            <main>
                <Hero />
                <Services />
                <WhyUs />
                <Stats />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
            <ScrollToTop isVisible={isScrollToTopVisible} whatsappNumber="905304162355" />
        </>
    );
}

export default App;

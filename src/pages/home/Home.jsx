import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Banner from '../../components/banner/Banner';
import Spiner from '../../components/spiner/Spiner';
import HandDetail from '../../components/handeDetail/HandDetail';
import classes from './home.module.css';
import ZodiacSign from '../../components/zodiacSign/ZodiacSign';
import { BiUpArrowAlt } from 'react-icons/bi';

const Home = () => {
    const uparraw = useRef(null);

    useEffect(() => {
        stickyHeader();
    }, []);

    const stickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (
                document.body.scrollTop > 500 ||
                document.documentElement.scrollTop > 500
            ) {
                if (uparraw.current) {
                    uparraw.current.classList.add(classes.uparrow);
                }
            } else {
                if (uparraw.current) {
                    uparraw.current.classList.remove(classes.uparrow);
                }
            }
        });
    };

    const handelup = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className={classes.container}>
                <Banner />
                <HandDetail />
                <ZodiacSign />

                <div ref={uparraw} onClick={handelup}>
                    <BiUpArrowAlt className={classes.up} />
                </div>
            </div>
        </>
    );
};

export default Home;

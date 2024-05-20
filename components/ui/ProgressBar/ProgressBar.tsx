'use client'
import React from 'react'
import Styles from './ProgressBar.module.css'
import {motion, useScroll, useSpring} from 'framer-motion'

const ProgressBar = () => {
    const {scrollYProgress} = useScroll();
    const springScrollYProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div 
        className={Styles.ProgressBar} 
        style={{scaleX: springScrollYProgress }}
        ></motion.div>
    )
}

export default ProgressBar;

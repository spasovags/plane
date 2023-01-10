import React from 'react'
import Technology from '../components/Technology'
import styles from '../styles/TechStack.module.css'
import { useInView } from 'react-intersection-observer';


const TechStack = ({technologies}) => {

   return (
    <>
    <h2 className={`${styles["techstack-text"]}`}>Tech stack</h2>
    <section className={`${styles["techstack-container"]}`}>
       {technologies.map((technology, index) =>
        <Technology key={technology.id} indexAnim={index} value={technology}/>)}
    </section>
    </>
  )
}

export default TechStack
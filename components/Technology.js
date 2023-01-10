import React from 'react'
import Image from 'next/image'
import styles from '../styles/Technology.module.css'
import { useInView } from 'react-intersection-observer';

const Technology = (props) => {
  const post = props.value;
  const leftAnim = "leftAnim";
  const rightAnim = "rightAnim";

  let anim = props.indexAnim%2==0?leftAnim:rightAnim;
  const basePath = '/images/techstack'
  const { ref: cardRef, inView: IsCardsVisible } = useInView({triggerOnce: true, threshold:0.5});

   return (
      <div 
      className={`${styles["card"]} ${IsCardsVisible ? `${styles[`${anim}`]}` : ""}`}
      ref={cardRef} >
         <div className={`${styles["photoCont"]}`} >
          <div className={`${styles["photoCard"]}`} >
           <Image 
           src={`${basePath}/${post.photo}`} 
           layout="fill"
           objectFit='contain'
           alt={post.alt}/>
         </div> 
        </div>      
      </div>
   );
}

export default Technology
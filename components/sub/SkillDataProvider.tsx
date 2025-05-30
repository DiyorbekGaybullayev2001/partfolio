"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ src, index} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }
    const animationDelay = 0.3
    
  return (
  <motion.div
  ref={ref}
  initial="hidden"
  variants={imageVariants}
  animate={inView ? "visible" : "hidden"}
  custom={index}
  transition={{delay: index * animationDelay}}
  >
    <Image
src={src}
width={30}
height={30}
alt='skill image'
className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]  '
    />
  </motion.div>
  )
}

export default SkillDataProvider
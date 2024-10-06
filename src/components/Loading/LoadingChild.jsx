import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const LoadingChild = () => {

  const lineRef = useRef(null)

  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to(lineRef.current, {
      width: '120%',
      duration: 1.5,
      delay: 1,
      ease: 'expo.out'
    })
      .to(lineRef.current, {
        opacity: 0
      })
  })

  return (
    <div ref={lineRef} className='w-0 h-1 bg-white'></div>
  )
}

export default LoadingChild
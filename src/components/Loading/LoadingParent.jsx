import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import LoadingChild from './LoadingChild'

const LoadingParent = () => {
  const parentRef = useRef(null);

  useGSAP(() => {
    gsap.to(parentRef.current, {
      y: '-100%',
      delay: 2.5,
      duration: 0.5,
      onComplete: () => {
        window.scrollTo(0, 0)
      }
    })
  })

  return (
    <div ref={parentRef} className='w-full h-full overflow-clip bg-black z-50 fixed'>
      <LoadingChild />
    </div>
  )
}

export default LoadingParent
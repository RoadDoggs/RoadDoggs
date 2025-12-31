import { motion, useSpring } from "motion/react";
import {  useRef } from "react";




const El1 = ({maxTilt = 15}) => {
    const cardRef = useRef(null)
    const z = useSpring(0) 
    const rotateX = useSpring(0)
    const rotateY = useSpring(0)

    const calculateTilt = (e) => {
        if (!cardRef.current) return { rotateX: 0, rotateY: 0 }
        
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left 
        const y = e.clientY - rect.top 

        const xPercent = x / rect.width 
        const yPercent = y / rect.height;

        return {
            rotateX: maxTilt * (0.5 - yPercent),
            rotateY: maxTilt * (xPercent - 0.5)
        }
    }


    return (
        <motion.div ref={cardRef} style={{ z, rotateX, rotateY }} className="absolute left-1/2 top-10 -translate-x-1/2 w-64 md:w-96 aspect-3/4 bg-white p-3 shadow-2xl rotate-2 parallax-el group z-20" id="el1" transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onPointerMove={(e) => {
                const tilt = calculateTilt(e)
                rotateX.set(tilt.rotateX)
                rotateY.set(tilt.rotateY)
            }}

            onPointerLeave={() => {
                rotateX.set(0)
                rotateY.set(0)
                z.set(0)
            }}

            onPointerEnter={() => {
                z.set(-10)
            }}
        >
        <div className="tape w-24 h-8 -top-3 left-1/2 -translate-x-1/2"></div>
        <img
          src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          className="w-full h-full object-cover film-look grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <p className="font-hand text-2xl text-center mt-2 text-ink">
          Highway One, 2023
        </p>
      </motion.div>
    );
}

export default El1;
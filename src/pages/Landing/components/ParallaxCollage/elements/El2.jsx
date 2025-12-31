import { motion, useSpring } from "motion/react";
import { useRef } from "react";

const El2 = ({maxTilt = 15}) => {
     const cardRef = useRef(null);
     const z = useSpring(0);
     const rotateX = useSpring(0);
     const rotateY = useSpring(0);

     const calculateTilt = (e) => {
       if (!cardRef.current) return { rotateX: 0, rotateY: 0 };

       const rect = cardRef.current.getBoundingClientRect();
       const x = e.clientX - rect.left;
       const y = e.clientY - rect.top;

       const xPercent = x / rect.width;
       const yPercent = y / rect.height;

       return {
         rotateX: maxTilt * (0.5 - yPercent),
         rotateY: maxTilt * (xPercent - 0.5),
       };
     };
  return (
    <motion.div
      ref={cardRef}
      style={{ z, rotateX, rotateY }}
      className="absolute left-5 md:left-20 top-32 md:top-40 w-48 md:w-64 aspect-square bg-white p-3 shadow-xl -rotate-6 parallax-el z-10"
      data-speed="0.06"
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onPointerMove={(e) => {
        const tilt = calculateTilt(e);
        rotateX.set(tilt.rotateX);
        rotateY.set(tilt.rotateY);
      }}
      onPointerLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
        z.set(0);
      }}
      onPointerEnter={() => {
        z.set(-10);
      }}
    >
      <div className="tape w-20 h-6 -top-2 rotate-[-30deg]"></div>
      <img
        src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        className="w-full h-full object-cover film-look"
      />
      <div className="absolute -bottom-10 -left-10 bg-rust text-paper font-mono text-xs px-3 py-1 rotate-12">
        CO-PILOT APPROVED
      </div>
    </motion.div>
  );
};

export default El2;

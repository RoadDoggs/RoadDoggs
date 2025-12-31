import { motion, useSpring } from "motion/react";
import { useRef } from "react";

const El3 = ({maxTilt = 15}) => {
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
      className="absolute right-10 md:right-1/3 bottom-0 w-40 bg-white p-2 pb-8 shadow-lg rotate-12 parallax-el z-30"
      data-speed="0.09"
      ref={cardRef}
      style={{ z, rotateX, rotateY }}
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
      <div className="tape w-16 h-6 -top-2 right-4 -rotate-45 opacity-80"></div>
      <img
        src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        className="w-full aspect-square object-cover grayscale mix-blend-multiply opacity-90"
      />
      <p className="font-hand text-xl text-center mt-2 text-ink -rotate-2">
        Buster likes it.
      </p>
    </motion.div>
  );
};

export default El3;

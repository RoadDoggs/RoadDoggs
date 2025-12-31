import { motion, useSpring } from "motion/react";
import { useRef } from "react";

const El4 = ({maxTilt = 15}) => {
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
      className="absolute right-5 md:right-40 top-20 w-48 bg-[#fff9c4] p-6 shadow-md -rotate-3 parallax-el z-0"
      data-speed="0.04"
    >
      <div className="w-3 h-3 rounded-full bg-red-800/20 mx-auto -mt-2 mb-2"></div>
      <p className="font-hand text-2xl text-blue-900 leading-tight">
        Don't forget to pack the extra kibble and map!
      </p>
    </motion.div>
  );
};

export default El4;

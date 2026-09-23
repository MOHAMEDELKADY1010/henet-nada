// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Envelope({ onOpen, setplaying }) {
//   const [isOpening, setIsOpening] = useState(false);

//   const handleOpen = () => {
//     if (isOpening) return;

//     setplaying(true);
//     setIsOpening(true);

//     setTimeout(() => {
//       onOpen();
//     }, 500);
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         key="intro"
//         className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer"
//         style={{ background: "#f8f5ef" }}
//         initial={{ opacity: 1 }}
//         exit={{
//           opacity: 0,
//           scale: 0.5,
//           transition: {
//             duration: 0.5,
//             ease: [0.76, 0, 0.24, 0.5],
//           },
//         }}
//         onClick={handleOpen}
//       >
//         {/* Floating particles */}
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           {[...Array(12)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute rounded-full"
//               style={{
//                 width: Math.random() * 3 + 1 + "px",
//                 height: Math.random() * 3 + 1 + "px",
//                 background: "#C9A96E",
//                 left: Math.random() * 100 + "%",
//                 top: Math.random() * 100 + "%",
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: [0, 0.6, 0],
//                 y: [0, -30, -60],
//               }}
//               transition={{
//                 duration: Math.random() * 4 + 4,
//                 repeat: Infinity,
//                 delay: Math.random() * 6,
//               }}
//             />
//           ))}
//         </div>

//         {/* Envelope */}
//         <motion.div
//           className="relative w-[92vw] max-w-[550px]"
//           animate={{
//             scale: isOpening ? 1.08 : 1,
//           }}
//           transition={{
//             duration: 1.2,
//           }}
//         >
//           {/* Card */}
//           <motion.div
//             className="
//               absolute
//               left-1/2
//               bottom-[20%]
//               w-[78%]
//               h-[70%]
//               bg-white
//               rounded-sm
//               shadow-2xl
//               z-0
//             "
//             style={{
//               x: "-50%",
//             }}
//             animate={{
//               y: isOpening ? -180 : 40,
//             }}
//             transition={{
//               duration: 1.4,
//               ease: [0.76, 0, 0.24, 1],
//             }}
//           />

//           {/* Envelope Image */}
//           <motion.img
//             src="https://res.cloudinary.com/daqznvdzn/image/upload/v1780340635/a3c0d516-a895-4de2-abe4-79acd79bb7fd_isufxp.jpg"
//             alt=""
//             draggable={false}
//             className="relative z-10 w-full select-none"
//             animate={{
//               scale: isOpening ? 1.02 : 1,
//             }}
//           />

//           {/* Seal */}
//           <AnimatePresence>
//             {!isOpening && (
//               <motion.div
//                 initial={{ scale: 1 }}
//                 exit={{
//                   scale: 0,
//                   rotate: 180,
//                   opacity: 0,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                 }}
//                 className="
//                   absolute
//                   left-1/2
//                   top-[58%]
//                   -translate-x-1/2
//                   -translate-y-1/2
//                   z-20
//                   w-[72px]
//                   h-[72px]
//                   rounded-full
//                   cursor-pointer
//                 "
//               >
//                 <div
                 
//                 />
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Opening light */}
//           <AnimatePresence>
//             {isOpening && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.9 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 1 }}
//                 className="
//                   absolute
//                   inset-0
//                   bg-white
//                   z-30
//                   pointer-events-none
//                 "
//               />
//             )}
//           </AnimatePresence>
//         </motion.div>

//         {/* Bottom Text */}
//         <motion.div
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-40"
//           animate={{
//             opacity: isOpening ? 0 : 1,
//           }}
//         >
//           <p
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: "11px",
//               color: "rgba(80,80,80,0.7)",
//               letterSpacing: "0.2em",
//               fontStyle: "italic",
//             }}
//           >
//             اضغط لفتح الدعوة
//           </p>

//           <p
//             style={{
//               fontFamily: "'Montserrat', sans-serif",
//               fontSize: "9px",
//               color: "rgba(80,80,80,0.6)",
//               letterSpacing: "0.10em",
//               textTransform: "uppercase",
//               fontWeight: "300",
//             }}
//           >
//             Click anywhere to open
//           </p>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CLOSED = "";
const OPEN   = "";

export default function Envelope({ onOpen, setplaying }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setplaying(true);
    setIsOpening(true);
    setTimeout(() => onOpen(), 400);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden cursor-pointer"
        style={{ background: "#f8f5ef" }}
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 0.5,
          transition: { duration: 0.45, ease: [0.76, 0, 0.24, 0.5] },
        }}
        onClick={handleOpen}
      >

        {/* ── جزيئات عائمة ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width:   Math.random() * 3 + 1 + "px",
                height:  Math.random() * 3 + 1 + "px",
                background: "#C9A96E",
                left: Math.random() * 100 + "%",
                top:  Math.random() * 100 + "%",
                opacity: 0,
              }}
              animate={{ opacity: [0, 0.6, 0], y: [0, -30, -60] }}
              transition={{
                duration: Math.random() * 4 + 4,
                repeat: Infinity,
                delay: Math.random() * 6,
              }}
            />
          ))}
        </div>

        {/* ── الجواب — يملأ الشاشة كاملة ── */}
        <motion.div
          className="absolute inset-0"
          animate={isOpening ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* صورة الجواب المقفول */}
          <motion.img
            src={CLOSED}
            alt=""
            draggable={false}
            className="absolute inset-0 w-full h-full select-none"
            style={{ objectFit: "cover", objectPosition: "center" }}
            animate={{ opacity: isOpening ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* صورة الجواب المفتوح */}
          <motion.img
            src={OPEN}
            alt=""
            draggable={false}
            className="absolute inset-0 w-full h-full select-none"
            style={{ objectFit: "cover", objectPosition: "center" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpening ? 1 : 0 }}
            transition={{ duration: 0.35 }}
          />
        </motion.div>

        {/* ── نص أسفل ── */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-40"
          animate={{ opacity: isOpening ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "11px",
            color: "rgba(80,80,80,0.7)",
            letterSpacing: "0.2em",
            fontStyle: "italic",
          }}>اضغط لفتح الدعوة</p>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "9px",
            color: "rgba(80,80,80,0.6)",
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            fontWeight: "300",
          }}>Click anywhere to open</p>
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
}
// import { useRef } from 'react'
// import { motion, useInView } from 'framer-motion'

// // Gallery placeholder images — users can replace with real wedding photos
// const photos = [
//   { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', alt: 'Wedding moment 1', wide: false },
//   { id: 2, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', alt: 'Wedding moment 2', wide: true },
//   { id: 3, src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80', alt: 'Wedding moment 3', wide: false },
//   { id: 4, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80', alt: 'Wedding moment 4', wide: false },
//   { id: 5, src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80', alt: 'Wedding moment 5', wide: true },
//   { id: 6, src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', alt: 'Wedding moment 6', wide: false },
// ]

// function GalleryPhoto({ photo, index }) {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: '-60px' })

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 40, scale: 0.97 }}
//       animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
//       transition={{ duration: 1.1, delay: index * 0.12, ease: [0.76, 0, 0.24, 1] }}
//       className={`relative overflow-hidden group ${photo.wide ? 'md:col-span-2' : ''}`}
//       style={{ aspectRatio: photo.wide ? '2/1' : '3/4' }}
//     >
//       <motion.img
//         src={photo.src}
//         alt={photo.alt}
//         className="w-full h-full object-cover"
//         style={{ filter: 'sepia(15%) saturate(0.9) brightness(0.95)' }}
//         whileHover={{ scale: 1.06 }}
//         transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
//       />
//       {/* Hover overlay */}
//       <div
//         className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
//         style={{ background: 'linear-gradient(135deg, rgba(201,169,110,0.15) 0%, rgba(0,0,0,0.2) 100%)' }}
//       />
//       {/* Subtle frame overlay */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-40"
//         style={{ boxShadow: 'inset 0 0 80px rgba(0,0,0,0.3)' }}
//       />
//     </motion.div>
//   )
// }

// export default function Gallery() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: '-100px' })

//   return (
//     <section
//       ref={ref}
//       className="relative py-24 md:py-32 overflow-hidden"
//       style={{ background: '#F9F6F1' }}
//     >
//       <div
//         className="absolute top-0 left-0 right-0 h-px"
//         style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.25), transparent)' }}
//       />

//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section header */}
//         <div className="text-center mb-16">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.9 }}
//             style={{
//               fontFamily: "'Montserrat', sans-serif",
//               fontSize: '10px',
//               letterSpacing: '0.4em',
//               fontWeight: '300',
//               color: '#C9A96E',
//               textTransform: 'uppercase',
//               marginBottom: '16px',
//             }}
//           >
//             Memories
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: 25 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 1.0, delay: 0.1 }}
//             style={{
//               fontFamily: "'Cormorant Garant', serif",
//               fontSize: 'clamp(34px, 6vw, 56px)',
//               fontWeight: '300',
//               color: '#2A1F12',
//               letterSpacing: '0.04em',
//               marginBottom: '8px',
//             }}
//           >
//             Our Moments
//           </motion.h2>

//           <motion.div
//             initial={{ opacity: 0, scaleX: 0 }}
//             animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
//             transition={{ duration: 1.2, delay: 0.2 }}
//             className="flex items-center justify-center gap-3"
//           >
//             <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A96E)' }} />
//             <div style={{ width: '4px', height: '4px', background: '#C9A96E', transform: 'rotate(45deg)' }} />
//             <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #C9A96E, transparent)' }} />
//           </motion.div>
//         </div>

//         {/* Gallery grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
//           {photos.map((photo, index) => (
//             <GalleryPhoto key={photo.id} photo={photo} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FaTimes, FaSearchPlus } from 'react-icons/fa'

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80', alt: 'Wedding moment 1' },
  { id: 2, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80', alt: 'Wedding moment 2' },
  { id: 3, src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80', alt: 'Wedding moment 3' },
  { id: 4, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80', alt: 'Wedding moment 4' },
  { id: 5, src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&q=80', alt: 'Wedding moment 5' },
  { id: 6, src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80', alt: 'Wedding moment 6' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: '#F9F6F1' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.4em',
              fontWeight: '300',
              color: '#C9A96E',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Memories
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(34px, 6vw, 56px)',
              fontWeight: '300',
              color: '#2A1F12',
              letterSpacing: '0.04em',
              marginBottom: '12px',
            }}
          >
            Our Moments
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3"
          >
            <div
              style={{
                width: '40px',
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent, #C9A96E)',
              }}
            />
            <div
              style={{
                width: '4px',
                height: '4px',
                background: '#C9A96E',
                transform: 'rotate(45deg)',
              }}
            />
            <div
              style={{
                width: '40px',
                height: '1px',
                background:
                  'linear-gradient(90deg, #C9A96E, transparent)',
              }}
            />
          </motion.div>
        </div>

        {/* Swiper Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.7,
                spaceBetween: 24,
              },
            }}
            style={{ paddingBottom: '50px' }}
          >
            {photos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <motion.div
                  className="relative group overflow-hidden rounded-xl cursor-pointer"
                  style={{ aspectRatio: '4/5' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightbox(photo)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{
                      filter:
                        'sepia(15%) saturate(0.9) brightness(0.95)',
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          background: 'rgba(201,169,110,0.9)',
                        }}
                      >
                        <FaSearchPlus
                          className="text-[#1A120B]"
                          size={18}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Luxury Corners */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A96E]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A96E]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A96E]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A96E]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Frame Shadow */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      boxShadow:
                        'inset 0 0 80px rgba(0,0,0,0.25)',
                    }}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: 'rgba(26,18,11,0.95)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full rounded-xl"
                style={{
                  border:
                    '1px solid rgba(201,169,110,0.35)',
                }}
              />

              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: '#C9A96E' }}
              >
                <FaTimes className="text-[#1A120B]" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
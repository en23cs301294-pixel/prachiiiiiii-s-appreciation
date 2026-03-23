import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const flowers = [
    {
      name: 'SUNFLOWER',
      image: './images/flower1.png',
      color: 'linear-gradient(135deg, #d4a017 0%, #f2c94c 100%)',
      // desc: `Radiant blooms that follow the sun ✨ you are the sunshine gentle but powerful`,
      desc: `🌻 Sunflowers for positivity and bright days`,
    },
    {
      name: 'TULIPS',
      image: './images/flower2.png',
      color: 'linear-gradient(135deg, #4b0fcf 0%, #8140d8 100%)',
      // desc: `Graceful love in every petal 💜 you are the gentle breeze that brings comfort on a hot day`,
      desc: `🌷 Tulips for grace and beauty,🌷 for happiness and comfort`,
    },
    {
      name: 'CHERRY BLOSSOM',
      image: './images/flower4.png',
      color: 'linear-gradient(135deg, #e48aa0 0%, #f06b9b 100%)',
      // desc: `Beautiful moments, like us together 🌸 you are toooo cute`,
      desc: `🌸 Cherry blossoms for beauty and tranquility | 🌸  for beautiful moments`,
    },
    {
      name: 'ORCHID',
      image: './images/flower5.png',
      color: 'linear-gradient(135deg, #0f4ba8 0%, #2b7ddf 100%)',
      // desc: `Rare beauty, just like you 💙 you are the gentle flower that brings joy to my life`,
      desc: `🌼 Orchids for growth and strength`,
    },
    {
      name: 'RED ROSE',
      image: './images/flower3.png',
      color: 'linear-gradient(135deg, #7a0b10 0%, #b91c1c 100%)',
      desc: `🌹 Roses for all the good things life has to offer ❤️🌹 And roses… just to complete it. Great Year Ahead🐰 `,
    },
  ]

  const [index, setIndex] = useState(0)
  const current = flowers[index]

  const handleNext = () => {
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % flowers.length)
    }, 600) 
  }

  const goToFlower = (idx) => {
    if (idx !== index) {
      setTimeout(() => {
        setIndex(idx)
      }, 600)
    }
  }

  // Auto-rotate flowers every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="hero"
      style={{ background: current.color, transition: 'background 1s ease' }}
    >
      {/* Floating hearts animation */}
      <div className="floating-hearts">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            ♥
          </div>
        ))}
      </div>

      <div className="hero-content">
        {/* Special header message */}
        <div className="special-message">
          <span className="heart-icon">💝</span>
          <p>A Happy Birthday 🐻‍❄️🐼
            To a better, brighter year</p>
        </div>

        <motion.div
          key={current.name}
          className="hero-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="flower-name-wrapper">
            <h1>{current.name}</h1>
          </div>
          <p className="flower-desc">{current.desc}</p>
          <div className="indicator-dots">
            {flowers.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${index === idx ? 'active' : ''}`}
                onClick={() => goToFlower(idx)}
              />
            ))}
          </div>
        </motion.div>

        <div className="hero-right">
          <div className="capsule-wrapper">
            {/* Decorative rings */}
            <div className="decorative-ring ring-1"></div>
            <div className="decorative-ring ring-2"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="capsule"
                initial={{ y: 100, opacity: 0, scale: 0.95, rotate: -2 }}
                animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
                exit={{ y: -100, opacity: 0, scale: 0.95, rotate: 2 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.img
                key={current.image}
                src={current.image}
                className="flower-img"
                initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}   
                exit={{ scale: 0.8, opacity: 0, rotate: 10 }}   
                transition={{
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.1,
                }}
              />
            </AnimatePresence>
          </div>

          <motion.div 
            className="down-arrow-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="down-arrow" onClick={handleNext}>
              <div className="arrow-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="white"
                  className="arrow-icon"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <span className="arrow-text">Tap to explore</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero

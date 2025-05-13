"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define character sets for the slot machine effect
const CHAR_SETS = {
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?/',
  japanese: 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
  hindi: 'अआइईउऊएऐओऔकखगघचछजझटठडढणतथदधनपफबभमयरलवशषसह',
  korean: 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣ',
  arabic: 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي',
  greek: 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω',
  russian: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя',
  thai: 'กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ',
  bengali: 'অআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ',
  armenian: 'ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖաբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆև',
  tibetan: 'ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ',
  georgian: 'აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ',
  devanagari: 'कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह',
  chinese: '的一是不了人我在有他这为之大来以个中上们下自到子说道也时要可家出而过里然就去能得于着看起还发成日如使但心法与当动所同工面'
};

// Combine all characters into one set for better randomization
const ALL_CHARS = Object.values(CHAR_SETS).join('');

interface SlotMachineNameProps {
  finalFirstName?: string;
  finalLastName?: string;
  duration?: number;
  staggerDelay?: number;
  charAnimationDuration?: number; 
}

export function SlotMachineName({
  finalFirstName = 'Akash',
  finalLastName = 'Ponnam',
  duration = 5, // Increased duration
  staggerDelay = 0.12,
  charAnimationDuration = 0.08, // Faster individual character flips
}: SlotMachineNameProps) {
  // Use client-side only state to avoid hydration mismatches
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const animationComplete = useRef(false);
  
  // Split names into arrays for individual letter animations
  const firstNameChars = finalFirstName.split('');
  const lastNameChars = finalLastName.split('');
  
  // Set mounted state after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    if (!mounted) return;

    // Set a timeout to stop the animation after the specified duration
    const timer = setTimeout(() => {
      animationComplete.current = true;
      setIsAnimating(false);
    }, (duration + firstNameChars.length * staggerDelay + lastNameChars.length * staggerDelay) * 1000);
    
    return () => clearTimeout(timer);
  }, [duration, firstNameChars.length, lastNameChars.length, staggerDelay, mounted]);
  
  // Don't render until after first mount to avoid hydration issues
  if (!mounted) {
    return (
      <h1 className="font-montserrat font-thin pb-16 text-4xl md:text-5xl lg:text-7xl lg:mt-16 relative z-10" suppressHydrationWarning>
        <span className="inline-block">{finalFirstName}</span>{' '}
        <span className="inline-block" style={{ letterSpacing: '-0.04em' }}>{finalLastName}</span>
      </h1>
    );
  }
  
  return (
    <h1 className="font-montserrat font-thin pb-16 text-4xl md:text-5xl lg:text-7xl lg:mt-16 relative z-10">
      <span className="inline-block">
        {firstNameChars.map((char, index) => (
          <SlotMachineChar
            key={`first-${index}`}
            finalChar={char}
            index={index}
            isAnimating={isAnimating}
            duration={duration}
            staggerDelay={staggerDelay}
            charAnimationDuration={charAnimationDuration}
          />
        ))}
      </span>{' '}
      <span className="inline-block" style={{ letterSpacing: '-0.04em' }}>
        {lastNameChars.map((char, index) => (
          <SlotMachineChar
            key={`last-${index}`}
            finalChar={char}
            index={index + firstNameChars.length}
            isAnimating={isAnimating}
            duration={duration}
            staggerDelay={staggerDelay}
            charAnimationDuration={charAnimationDuration}
          />
        ))}
      </span>
    </h1>
  );
}

interface SlotMachineCharProps {
  finalChar: string;
  index: number;
  isAnimating: boolean;
  duration: number;
  staggerDelay: number;
  charAnimationDuration?: number;
}

function SlotMachineChar({ finalChar, index, isAnimating, duration, staggerDelay, charAnimationDuration = 0.08 }: SlotMachineCharProps) {
  const [currentChar, setCurrentChar] = useState(finalChar); // Start with final char to avoid hydration issues
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const flipSpeed = useRef<number>(40); // Faster initial flip speed
  const [hasStarted, setHasStarted] = useState(false);
  
  // Space and special characters don't animate
  if (finalChar === ' ' || finalChar === '\u00A0') {
    return <span>&nbsp;</span>;
  }
  
  // Function to get a random character from our pool
  const getRandomChar = useCallback(() => {
    return ALL_CHARS.charAt(Math.floor(Math.random() * ALL_CHARS.length));
  }, []);
  
  useEffect(() => {
    // Don't start animation immediately, stagger based on index
    const startDelay = 100 + (index * staggerDelay * 1000);
    
    const startAnimation = () => {
      setHasStarted(true);
      startTimeRef.current = Date.now();
      
      // Start rapidly changing characters
      intervalRef.current = setInterval(() => {
        setCurrentChar(getRandomChar());
        
        // Gradually slow down the flipping as we approach the end
        const elapsed = Date.now() - (startTimeRef.current || 0);
        const progress = elapsed / (duration * 1000);
        
        // Create a more dramatic slowdown curve
        if (progress > 0.6) {
          // Start slowing down more dramatically
          const slowdownFactor = Math.pow((progress - 0.6) * 2.5, 2) * 800;
          flipSpeed.current = 40 + Math.floor(slowdownFactor);
          
          // Update the interval timing
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
              // As we get closer to the end, increase chance of showing the final character
              const finalCharProbability = Math.min(1, (progress - 0.8) * 5);
              
              if (Math.random() < finalCharProbability) {
                setCurrentChar(finalChar);
              } else {
                setCurrentChar(getRandomChar());
              }
            }, flipSpeed.current);
          }
        }
        
        // If animation should be complete, show final character
        if (!isAnimating) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            setCurrentChar(finalChar);
          }
        }
      }, flipSpeed.current);
    };
    
    const animationTimeout = setTimeout(startAnimation, startDelay);
    
    return () => {
      clearTimeout(animationTimeout);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAnimating, index, duration, staggerDelay, finalChar, getRandomChar]);
  
  // When animation is complete, ensure we display the final character
  useEffect(() => {
    if (!isAnimating && intervalRef.current) {
      clearInterval(intervalRef.current);
      setCurrentChar(finalChar);
    }
  }, [isAnimating, finalChar]);
  
  return (
    <motion.span 
      className="inline-block relative overflow-hidden"
      style={{ minWidth: '0.5em' }}
      initial={{ opacity: hasStarted ? 0 : 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentChar}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: charAnimationDuration }}
          className="inline-block"
          suppressHydrationWarning
        >
          {currentChar}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}

// Helper function to get a random character
function getRandomChar() {
  return ALL_CHARS.charAt(Math.floor(Math.random() * ALL_CHARS.length));
} 
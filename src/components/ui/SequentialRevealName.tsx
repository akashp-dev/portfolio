"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

// Character sets for scrambling (keeping small for better performance)
const CHAR_SETS = {
  latin: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '@#$%&*',
  // Just a few characters from other languages to add visual interest without being overwhelming
  japanese: 'アイウエオカキク',
  hindi: 'अआइईउ',
  korean: 'ㄱㄴㄷㄹㅁㅂ',
  russian: 'АБВГДЕ'
};

// Smaller selection of random characters
const ALL_CHARS = Object.values(CHAR_SETS).join('');

// Pre-defined character width mapping for standard characters
// This helps ensure consistent layout
const CHAR_WIDTH_MAP: Record<string, number> = {
  'A': 1, 'B': 1, 'C': 1, 'D': 1, 'E': 1, 'F': 1, 'G': 1, 'H': 1, 'I': 0.6, 'J': 0.8,
  'K': 1, 'L': 0.8, 'M': 1.2, 'N': 1, 'O': 1, 'P': 1, 'Q': 1, 'R': 1, 'S': 1, 'T': 1,
  'U': 1, 'V': 1, 'W': 1.4, 'X': 1, 'Y': 1, 'Z': 1,
  'a': 0.9, 'b': 0.9, 'c': 0.8, 'd': 0.9, 'e': 0.9, 'f': 0.6, 'g': 0.9, 'h': 0.9, 'i': 0.4, 'j': 0.4,
  'k': 0.8, 'l': 0.4, 'm': 1.4, 'n': 0.9, 'o': 0.9, 'p': 0.9, 'q': 0.9, 'r': 0.6, 's': 0.8, 't': 0.6,
  'u': 0.9, 'v': 0.8, 'w': 1.2, 'x': 0.8, 'y': 0.8, 'z': 0.8,
  ' ': 0.4, '-': 0.6, '_': 0.6
};

// Get estimated character width multiplier
const getCharWidth = (char: string): number => {
  return CHAR_WIDTH_MAP[char] || 1;
};

interface SequentialRevealNameProps {
  firstName?: string;
  lastName?: string;
  totalDuration?: number;
}

export function SequentialRevealName({
  firstName = 'Akash',
  lastName = 'Ponnam',
  totalDuration = 4000, // Total animation duration in ms
}: SequentialRevealNameProps) {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Calculate and set fixed height for the container to prevent layout shifts
    if (containerRef.current) {
      const height = containerRef.current.offsetHeight;
      containerRef.current.style.minHeight = `${height}px`;
    }
  }, []);
  
  // If not yet mounted, render static version to prevent hydration issues
  if (!isMounted) {
    return (
      <h1 
        className="font-montserrat font-thin pb-16 text-4xl md:text-5xl lg:text-7xl lg:mt-16 relative z-10" 
        suppressHydrationWarning
        ref={containerRef}
      >
        <span>{firstName}</span>{' '}
        <span style={{ letterSpacing: '-0.04em' }}>{lastName}</span>
      </h1>
    );
  }
  
  const fullName = `${firstName} ${lastName}`;
  const letterCount = fullName.length;
  
  // Calculate timing for each letter
  const letterDuration = Math.min(1500, totalDuration / 2); // Max 1.5s per letter
  const staggerDelay = (totalDuration - letterDuration) / letterCount;
  
  return (
    <h1 
      className="font-montserrat font-thin pb-16 text-4xl md:text-5xl lg:text-7xl lg:mt-16 relative z-10 flex items-baseline"
      ref={containerRef}
      style={{ width: '100%', height: 'auto', overflow: 'visible' }}
    >
      <div className="relative inline-flex items-baseline">
        {firstName.split('').map((char, index) => (
          <ScrambleLetter
            key={`first-${index}`}
            finalChar={char}
            delay={index * staggerDelay}
            duration={letterDuration}
            charWidthMultiplier={getCharWidth(char)}
            totalChars={firstName.length}
            index={index}
          />
        ))}
      </div>
      
      <div className="inline-flex items-baseline mx-3 lg:mx-4">
        &nbsp;
      </div>
      
      <div className="relative inline-flex items-baseline" style={{ letterSpacing: '-0.04em' }}>
        {lastName.split('').map((char, index) => (
          <ScrambleLetter
            key={`last-${index}`}
            finalChar={char}
            delay={(firstName.length + 1 + index) * staggerDelay}
            duration={letterDuration}
            charWidthMultiplier={getCharWidth(char)}
            totalChars={lastName.length}
            index={index}
          />
        ))}
      </div>
    </h1>
  );
}

interface ScrambleLetterProps {
  finalChar: string;
  delay: number;
  duration: number;
  charWidthMultiplier?: number;
  totalChars?: number;
  index?: number;
}

function ScrambleLetter({
  finalChar,
  delay,
  duration,
  charWidthMultiplier = 1,
  totalChars = 1,
  index = 0
}: ScrambleLetterProps) {
  const [displayChar, setDisplayChar] = useState(finalChar);
  const [revealed, setRevealed] = useState(false);
  const [opacity, setOpacity] = useState(0.95);
  const scrambleIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const frameCountRef = useRef(0);
  const charRef = useRef<HTMLSpanElement>(null);
  
  // Skip animation for spaces
  if (finalChar === ' ') {
    return <span className="inline-block" style={{ minWidth: '0.5em' }}>&nbsp;</span>;
  }
  
  // Get base width in em units for the character
  const baseWidth = Math.max(0.5, charWidthMultiplier) + 'em';
  
  // Get a random character that's not the final character
  const getRandomChar = useCallback(() => {
    let randomChar;
    do {
      randomChar = ALL_CHARS.charAt(Math.floor(Math.random() * ALL_CHARS.length));
    } while (randomChar === finalChar);
    return randomChar;
  }, [finalChar]);
  
  useEffect(() => {
    // Ensure the character is properly sized from the start to prevent layout shifts
    if (charRef.current) {
      charRef.current.style.minWidth = baseWidth;
      charRef.current.style.display = 'inline-flex';
      charRef.current.style.justifyContent = 'center';
      charRef.current.style.verticalAlign = 'baseline';
    }
    
    // Delay the start of the animation
    const startTimeout = setTimeout(() => {
      // Start with a random character
      setDisplayChar(getRandomChar());
      
      const startTime = Date.now();
      let previousProgress = 0;
      let finalCharStickTime = 0;
      
      // Scramble animation
      scrambleIntervalRef.current = setInterval(() => {
        frameCountRef.current++;
        
        // Calculate animation progress (0 to 1)
        const elapsed = Date.now() - startTime;
        const progress = Math.min(1, elapsed / duration);
        
        // Calculate a more curve-based easing for slowing down the scrambling
        const easedProgress = Math.pow(progress, 1.5);
        
        // Determine scramble frequency based on progress - starts fast, slows down gradually
        const scrambleFrequency = Math.max(1, Math.floor(easedProgress * 10));
        
        // Gradually increase opacity as we get closer to the end
        if (progress > 0.7) {
          setOpacity(0.95 + (progress - 0.7) * 0.05 / 0.3);
        }
        
        // Smooth transition to final state based on position in the word
        // End chars settle slightly faster
        const positionFactor = index / (totalChars || 1);
        const finalCharProbability = Math.min(
          1, 
          Math.pow(progress, 2.5 - positionFactor * 0.5)
        );
        
        // If we're far enough in the animation, show more of the final character
        if (Math.random() < finalCharProbability) {
          setDisplayChar(finalChar);
          
          // Track how long we've shown the final character
          if (displayChar === finalChar) {
            finalCharStickTime += 16; // Assume roughly 60fps
          }
          
          // If we've shown the final character consistently for enough time, settle on it
          if (finalCharStickTime > 100 && progress > 0.7) {
            clearInterval(scrambleIntervalRef.current!);
            setDisplayChar(finalChar);
            setRevealed(true);
            setOpacity(1);
          }
        } else if (frameCountRef.current % scrambleFrequency === 0) {
          // Only scramble every few frames, and less often as we progress
          // Also, don't scramble if we're very close to the end
          if (progress < 0.95) {
            setDisplayChar(getRandomChar());
            finalCharStickTime = 0;
          }
        }
        
        // Smoothly end the animation if we're at the very end
        if (progress >= 0.98 && !revealed) {
          clearInterval(scrambleIntervalRef.current!);
          setDisplayChar(finalChar);
          setRevealed(true);
          setOpacity(1);
        }
        
        // Save progress for velocity calculation
        previousProgress = progress;
      }, 16);
    }, delay);
    
    return () => {
      clearTimeout(startTimeout);
      if (scrambleIntervalRef.current) {
        clearInterval(scrambleIntervalRef.current);
      }
    };
  }, [finalChar, delay, duration, baseWidth, getRandomChar, index, totalChars]);
  
  return (
    <span 
      ref={charRef}
      className="inline-flex justify-center items-baseline"
      style={{ 
        minWidth: baseWidth,
        transition: 'color 0.25s ease-out, opacity 0.25s ease-out',
        color: 'white',
        opacity: opacity,
        textAlign: 'center',
        overflow: 'visible',
        userSelect: 'none',
        verticalAlign: 'baseline'
      }}
      suppressHydrationWarning
    >
      {displayChar}
    </span>
  );
} 
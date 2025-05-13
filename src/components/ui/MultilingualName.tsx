"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NameTranslation {
  language: string;
  firstName: string;
  lastName: string;
}

export function MultilingualName() {
  // Your name in different languages
  const translations: NameTranslation[] = [
    { language: 'Hindi', firstName: 'आकाश', lastName: 'पोन्नम' },
    { language: 'Japanese', firstName: 'アカシュ', lastName: 'ポンナム' },
    { language: 'Arabic', firstName: 'أكاش', lastName: 'بونام' },
    { language: 'Russian', firstName: 'Акаш', lastName: 'Поннам' },
    { language: 'Chinese', firstName: '阿卡什', lastName: '波南' },
    { language: 'Korean', firstName: '아카시', lastName: '폰남' },
    { language: 'English', firstName: 'Akash', lastName: 'Ponnam' },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedName, setDisplayedName] = useState(translations[0]);
  const [finalReached, setFinalReached] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [letters, setLetters] = useState({ firstName: displayedName.firstName.split(''), lastName: displayedName.lastName.split('') });
  
  // Function to gradually transition between names letter by letter
  const transitionName = (from: NameTranslation, to: NameTranslation) => {
    setIsTransitioning(true);
    
    // Split names into arrays of characters
    const fromFirstChars = from.firstName.split('');
    const toFirstChars = to.firstName.split('');
    const fromLastChars = from.lastName.split('');
    const toLastChars = to.lastName.split('');
    
    // Determine max length for smooth transition
    const maxFirstLength = Math.max(fromFirstChars.length, toFirstChars.length);
    const maxLastLength = Math.max(fromLastChars.length, toLastChars.length);
    
    // Create a temporary array to store current transition state
    let tempFirstChars = [...fromFirstChars];
    let tempLastChars = [...fromLastChars];
    
    // Transition characters one by one with a slight delay between each
    const totalSteps = maxFirstLength + maxLastLength;
    let step = 0;
    
    const transitionInterval = setInterval(() => {
      // First transition the first name
      if (step < maxFirstLength) {
        // Remove a character if source is longer
        if (step < fromFirstChars.length && fromFirstChars.length > toFirstChars.length) {
          tempFirstChars.pop();
        }
        // Add a character from target if target is longer or replace current
        else if (step < toFirstChars.length) {
          if (step < tempFirstChars.length) {
            tempFirstChars[step] = toFirstChars[step];
          } else {
            tempFirstChars.push(toFirstChars[step]);
          }
        }
      } 
      // Then transition the last name
      else if (step - maxFirstLength < maxLastLength) {
        const lastNameStep = step - maxFirstLength;
        // Remove a character if source is longer
        if (lastNameStep < fromLastChars.length && fromLastChars.length > toLastChars.length) {
          tempLastChars.pop();
        }
        // Add a character from target if target is longer or replace current
        else if (lastNameStep < toLastChars.length) {
          if (lastNameStep < tempLastChars.length) {
            tempLastChars[lastNameStep] = toLastChars[lastNameStep];
          } else {
            tempLastChars.push(toLastChars[lastNameStep]);
          }
        }
      }
      
      // Update the letters state with current transition state
      setLetters({
        firstName: [...tempFirstChars],
        lastName: [...tempLastChars]
      });
      
      step++;
      
      // End transition
      if (step >= totalSteps) {
        clearInterval(transitionInterval);
        setIsTransitioning(false);
        setDisplayedName(to);
      }
    }, 70); // Adjust the speed of transition
  };
  
  useEffect(() => {
    if (finalReached) return;
    
    // Start the transition cycle
    const transitionTimer = setTimeout(() => {
      // Determine the next language
      const nextIndex = (currentIndex + 1) % translations.length;
      
      // Transition to the next language
      transitionName(translations[currentIndex], translations[nextIndex]);
      
      // Update index for next cycle
      setCurrentIndex(nextIndex);
      
      // If we've reached English (the final language), set flag to stop
      if (nextIndex === translations.length - 1) {
        setFinalReached(true);
      }
    }, isTransitioning ? 1500 : 1000); // Shorter delay during transitions
    
    return () => clearTimeout(transitionTimer);
  }, [currentIndex, finalReached, isTransitioning]);
  
  return (
    <h1 className="font-montserrat font-thin pb-16 text-4xl md:text-5xl lg:text-7xl lg:mt-16 relative z-10">
      <span className="inline-block min-w-32">
        {letters.firstName.map((char, index) => (
          <motion.span
            key={`first-${index}-${char}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {char}
          </motion.span>
        ))}
      </span>{' '}
      <span className="inline-block min-w-32" style={{ letterSpacing: '-0.04em' }}>
        {letters.lastName.map((char, index) => (
          <motion.span
            key={`last-${index}-${char}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </h1>
  );
} 
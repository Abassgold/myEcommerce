import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem(location.key);
    if (savedScrollPosition) {
      window.scrollTo({
        top: parseInt(savedScrollPosition, 10),
        behavior: 'auto',
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
    const saveScrollPosition = () => {
      sessionStorage.setItem(location.key, window.scrollY);
    };
    window.addEventListener('beforeunload', saveScrollPosition);
    return () => {
      saveScrollPosition();
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, [location]);

  return null;
};

export default ScrollToTop;

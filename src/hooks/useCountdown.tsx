import { useState, useEffect } from 'react';

const useCountdown = () => {
  let minutesParam = 5;

  if (typeof window !== 'undefined') {
    const localStorageMinutesChoosedByUser = localStorage.getItem('@Englishing:minutes');
    if (localStorageMinutesChoosedByUser) {
      minutesParam = Number(localStorageMinutesChoosedByUser);
    }
  }

  const [milisseconds, setMilisseconds] = useState(minutesParam * 60);

  const minutes = Math.floor(milisseconds / 60);
  const seconds = milisseconds % 60;

  useEffect(() => {
    const countdownTimeout = setTimeout(() => {
      if (milisseconds === 0) {
        setMilisseconds(minutesParam * 60);
        return;
      };

      setMilisseconds((oldState) => oldState - 1);
    }, 1000);

    return () => {
      clearTimeout(countdownTimeout);
    }
  }, [milisseconds])

  const setLocalStorageMinutes = (minutesToSave: number) => {
    if (typeof window !== 'undefined') {
      const minutesToSaveOnLocalStorage = String(minutesToSave);
      localStorage.setItem('@Englishing:minutes', minutesToSaveOnLocalStorage)

      minutesParam = minutesToSave;
      setMilisseconds(minutesToSave * 60);
    }
  }

  return { minutes, seconds, setLocalStorageMinutes };
};

export default useCountdown;

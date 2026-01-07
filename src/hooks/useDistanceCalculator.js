import { useEffect, useState } from 'react';
import * as Geolib from 'geolib';

const useDistanceCalculator = (location1, location2) => {
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    const getDistance = async () => {
      try {
        const calculatedDistance = Geolib.getDistance(location1, location2);
        setDistance(calculatedDistance / 1000); // Convert to kilometers
      } catch (error) {
        console.error("Error calculating distance:", error);
      }
    };

    getDistance();
  }, [location1, location2]);

  return distance;
};

export default useDistanceCalculator;
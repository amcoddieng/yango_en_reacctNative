import * as Location from 'expo-location';
import { useEffect, useState } from "react";

export const useGetLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission refusée pour accéder à la position');
        return;
      }

      // Récupération en temps réel
      const subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          distanceInterval: 1, // mise à jour tous les mètres
        },
        (loc) => setLocation(loc)
      );

      return () => subscription.remove();
    })();
  }, []);

  return location;
};

import { useState } from "react";
import { useDebounce } from "use-debounce";

export function useCurrentCity() {
  const [cityLocation, setCityLocation] = useState<string>("");
  const [debouncedCityLocation] = useDebounce<string>(cityLocation, 500);

  return { cityLocation, setCityLocation, debouncedCityLocation };
}

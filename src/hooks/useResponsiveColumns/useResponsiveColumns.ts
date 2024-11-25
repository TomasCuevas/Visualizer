import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";

export const useResponsiveColumns = () => {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1024 });

  return useMemo(() => {
    if (isMobile) return 1;
    if (isTablet) return 2;

    return 3;
  }, [isMobile, isTablet]);
};

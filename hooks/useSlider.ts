import { useState, useRef, useEffect } from "react";

export const useSlider = () => {
  const elementsRef = useRef<any[]>([]);
  const ulRef = useRef(null);

  const [elementsWidth, setElementsWidth] = useState<number[]>([]);
  const [currentElement, setCurrentElement] = useState(0);
  const [distanceToLeft, setDistanceToLeft] = useState(0);

  const [showLeftArrow, setShowLeftArrow] = useState<boolean>();
  const [showRightArrow, setShowRightArrow] = useState<boolean>();

  const moveNextElement = () => {
    setDistanceToLeft((prev) => prev - elementsWidth[currentElement] - 20);
    setCurrentElement((prev) => prev + 1);
  };

  const movePreviousElement = () => {
    setDistanceToLeft((prev) => prev + elementsWidth[currentElement - 1] + 20);
    setCurrentElement((prev) => prev - 1);
  };

  useEffect(() => {
    const newElementsWidth: number[] = [];
    elementsRef.current.forEach((element) =>
      newElementsWidth.push(element.offsetWidth)
    );

    setElementsWidth(newElementsWidth);
  }, [elementsRef]);

  useEffect(() => {
    const { offsetWidth } = ulRef.current! as { offsetWidth: number };
    const padding = (window.innerWidth * 12) / 100;

    setShowLeftArrow(distanceToLeft < 0);
    setShowRightArrow(
      offsetWidth + distanceToLeft > window.innerWidth - padding
    );
  }, [distanceToLeft]);

  return {
    // properties
    distanceToLeft,
    elementsRef,
    showLeftArrow,
    showRightArrow,
    ulRef,

    // methods
    moveNextElement,
    movePreviousElement,
  };
};

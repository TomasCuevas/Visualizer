/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect, useState } from "react";

//* interfaces *//
interface Return {
  columns: any[][];
}

export const useCalcColumns = (
  columnsProps: { min_width: number; columnsNumber: number }[],
  elements: any[],
  setIsLoading: Dispatch<SetStateAction<boolean>>
): Return => {
  const [columns, setColumns] = useState<any[][]>([]);
  const [first, setFirst] = useState(true);
  const [previousElements, setPreviousElements] = useState<[][]>([]);

  const calColumns = (
    columnsProps: { min_width: number; columnsNumber: number }[]
  ): void => {
    let column: number = 0;

    columnsProps.forEach(({ min_width, columnsNumber }, index) => {
      if (window.innerWidth >= min_width) {
        if (!columnsProps[index + 1]) {
          return (column = columnsNumber - 1);
        }
        if (window.innerWidth < columnsProps[index + 1].min_width) {
          return (column = columnsNumber - 1);
        }
      }
    });

    let pointer: number = 0;

    if (columns.flat().length === elements.length / 2) {
      elements.forEach((photo, index) => {
        if (index + 1 <= columns.flat().length) {
          pointer++;
          if (pointer > column) pointer = 0;

          return;
        }

        console.log(index);

        setColumns((prev) => {
          if (prev[pointer]?.length >= elements.length / (column + 1)) {
            pointer++;
            if (pointer > column) pointer = 0;

            return prev;
          }

          prev[pointer] = prev[pointer] ? [...prev[pointer], photo] : [photo];

          pointer++;
          if (pointer > column) pointer = 0;

          return prev;
        });
      });

      setIsLoading(false);
      return;
    }

    if (elements?.length > 0) {
      elements.forEach((photo) => {
        setColumns((prev) => {
          if (prev[pointer]?.length >= elements.length / (column + 1)) {
            pointer++;
            if (pointer > column) pointer = 0;

            return prev;
          }

          prev[pointer] = prev[pointer] ? [...prev[pointer], photo] : [photo];

          pointer++;
          if (pointer > column) pointer = 0;

          return prev;
        });
      });
    }

    setIsLoading(false);
    return;
  };

  useEffect(() => {
    if (first && elements?.length > 0) {
      setPreviousElements(elements);
      setFirst(false);
      calColumns(columnsProps);
    }

    if (!first && elements?.length !== previousElements?.length) {
      setPreviousElements(elements);
      calColumns(columnsProps);
    }

    const listener = window.addEventListener("resize", () =>
      calColumns(columnsProps)
    );

    return () => removeEventListener("resize", () => listener);
  }, [elements]);

  return {
    // properties
    columns,
  };
};

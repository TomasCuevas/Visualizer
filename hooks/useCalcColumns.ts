/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

//* interfaces *//
interface Returns {
  columns: [][];
}

export const useCalcColumns = (
  columnsProps: { min_width: number; columnsNumber: number }[],
  elements: any[]
): Returns => {
  const [columns, setColumns] = useState<[][]>([]);
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
    const newColumns: any = [];

    if (elements?.length > 0) {
      elements.forEach((photo) => {
        newColumns[pointer] = newColumns[pointer]
          ? [...newColumns[pointer], photo]
          : [photo];

        pointer++;
        if (pointer > column) pointer = 0;
      });
    }

    setColumns(newColumns);
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

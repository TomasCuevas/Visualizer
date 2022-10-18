/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect, useState } from "react";

//* interfaces *//
interface Props {
  columnsProps: { min_width: number; columnsNumber: number }[];
  elements: any[];
}

interface Return {
  columns: any[][];
}

export const useCalcColumns = ({ columnsProps, elements }: Props): Return => {
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
    const newColumns: any[][] = [];
    const uniqueElements: any[] = [];

    elements.forEach((item) => {
      let repeat = false;

      uniqueElements.forEach(({ id }) => {
        if (id === item.id) repeat = true;
      });

      if (repeat) return;
      uniqueElements.push(item);
    });

    if (uniqueElements?.length > 0) {
      uniqueElements.forEach((photo) => {
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

    if (!first && elements !== previousElements) {
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

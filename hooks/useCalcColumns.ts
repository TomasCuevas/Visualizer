/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

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
  const [previousElements, setPreviousElements] = useState<[][]>([]);
  const [innerWidth, setInnerWidth] = useState<number>(0);

  const calColumns = (
    columnsProps: { min_width: number; columnsNumber: number }[],
    reCalc = false
  ): void => {
    if (previousElements === elements && !reCalc) return;
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
    setPreviousElements(elements);
  };

  useEffect(() => {
    if (elements?.length > 0) {
      calColumns(columnsProps);
    }
  }, [elements]);

  useEffect(() => {
    calColumns(columnsProps, true);
  }, [innerWidth]);

  useEffect(() => {
    const listener = window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });

    return () => removeEventListener("resize", () => listener);
  }, []);

  return {
    // properties
    columns,
  };
};

import { useEffect, useState } from "react";

interface Props {
  columnsProps: { columnsNumber: number; min_width: number }[];
  elements: any[];
}

interface Returns {
  columns: [][];
}

export const useFeedColumns = ({ columnsProps, elements }: Props): Returns => {
  const [columns, setColumns] = useState<[][]>([]);
  const [first, setFirst] = useState(true);
  const [previousElements, setPreviousElements] = useState<[][]>([]);

  const calColumns = (): void => {
    let column: number = 0;
    columnsProps.forEach((col, index) => {
      if (window.innerWidth >= col.min_width) {
        if (!columnsProps[index + 1]) return (column = col.columnsNumber - 1);
        if (window.innerWidth < columnsProps[index + 1].min_width)
          return (column = col.columnsNumber - 1);
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
      calColumns();
    }

    if (!first && elements?.length !== previousElements?.length) {
      setPreviousElements(elements);
      calColumns();
    }

    window.addEventListener("resize", calColumns);
  }, [elements]);

  return {
    // properties
    columns,
  };
};

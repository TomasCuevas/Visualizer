import { useEffect, useState } from "react";

interface Props {
  elements: any[];
  columnsProps: { columnsNumber: number; min_width: number }[];
}

interface Returns {
  columns: [][];
}

export const useFeedColumns = ({ elements, columnsProps }: Props): Returns => {
  const [columns, setColumns] = useState<[][]>([]);
  const [nColumns, setNColumns] = useState(0);
  let pointer = 0;

  useEffect(() => {
    pointer = 0;
    const newColumns: any = [];
    if (elements) {
      elements.forEach((photo) => {
        newColumns[pointer] = newColumns[pointer]
          ? [...newColumns[pointer], photo]
          : [photo];

        pointer++;
        if (pointer > nColumns) pointer = 0;
      });
    }

    setColumns(newColumns);
  }, [elements, nColumns]);

  const eventListener = () => {
    columnsProps.forEach((col, index) => {
      if (window.innerWidth >= col.min_width) {
        if (!columnsProps[index + 1]) return setNColumns(col.columnsNumber - 1);
        if (window.innerWidth < columnsProps[index + 1].min_width)
          return setNColumns(col.columnsNumber - 1);
      }
    });

    window.addEventListener("resize", eventListener);
  };

  useEffect(() => {
    eventListener();
  }, []);

  return {
    // properties
    columns,
  };
};

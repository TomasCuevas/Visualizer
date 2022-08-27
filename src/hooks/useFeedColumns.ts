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

  useEffect(() => {
    columnsProps.forEach((col) => {
      if (window.innerWidth >= col.min_width)
        setNColumns(col.columnsNumber - 1);
    });

    window.addEventListener(
      "resize",
      () => {
        columnsProps.forEach((col) => {
          if (window.innerWidth >= col.min_width)
            setNColumns(col.columnsNumber - 1);
        });
      },
      false
    );
  }, []);

  return {
    // properties
    columns,
  };
};

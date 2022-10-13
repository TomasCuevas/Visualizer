import { Dispatch, SetStateAction } from "react";

interface Props {
  columnsProps: { min_width: number; columnsNumber: number }[];
  elements: any[];
  newElements: any[];
  setElements: Dispatch<SetStateAction<any>>;
}

export const calcColumns = ({
  columnsProps,
  elements,
  newElements,
  setElements,
}: Props) => {
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
  let newColumns: any[][] = structuredClone(elements);

  if (newElements?.length > 0) {
    newElements.forEach((photo) => {
      let repeat = false;
      newColumns.flat().forEach(({ id }) => {
        if (id === photo.id) repeat = true;
      });

      if (repeat) return;

      newColumns[pointer] = newColumns[pointer]
        ? [...newColumns[pointer], photo]
        : [photo];

      pointer++;
      if (pointer > column) pointer = 0;
      return;
    });

    setElements(newColumns);
  }

  return;
};

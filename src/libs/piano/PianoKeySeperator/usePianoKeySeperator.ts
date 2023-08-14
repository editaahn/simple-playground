import { ReactElement } from "react";

type UsePianoKeySeperatorProps = {
  note: string[];
  children: (props: { groups: string[][]; }) => ReactElement;
};

const SEPARATING_UNITS = [7, 5];

export const usePianoKeySeperator = ({ note, children }: UsePianoKeySeperatorProps) => {
  const copy = [...note];
  const groups: string[][] = [];

  for (let i = 0; copy.length !== 0; i++) {
    const count = i % 2 === 0 ? 0 : 1;
    groups.push(copy.splice(0, SEPARATING_UNITS[count]));
  }

  return {
    groups,
    children
  };
};
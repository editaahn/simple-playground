import { ReactElement } from "react";

type UsePianoKeySeperatorProps = {
  note: string[];
  children: (props: { groups: string[][] }) => ReactElement;
}

const NUMBER_OF_KEYS_IN_EACH_GROUP = [7, 5];

export const usePianoKeySeperator = ({ note, children }: UsePianoKeySeperatorProps) => {
  const copy = [...note];
  const groups: string[][] = [];

  for (let i = 0; copy.length !== 0; i++){
    groups.push(copy.splice(0, NUMBER_OF_KEYS_IN_EACH_GROUP[i % 2 === 0 ? 0 : 1]));
  }

  console.log(groups)
  
  return { groups, children };
}
import { PianoKey } from "./PianoKey";

type PianoKeyProps = {
  pressed: boolean;
  index: number;
  keyName: string;
};

const SIZE = {
  width: 2,
  height: 8
};

export const BlackPianoKey = ({ pressed, index, keyName }: PianoKeyProps) =>
  <PianoKey
    pressed={pressed}
    keyName={keyName}
    width={SIZE.width}
    height={SIZE.height}
    style={{
      bgcolor: pressed ? "gray" : "black",
      border: '1px solid #000',
      borderRadius: '0 0 3px 3px',
      left: `${(index * SIZE.width) + (SIZE.width / 2)}em`,
      position: 'absolute',
      zIndex: 2,
      typography: { color: 'white' }
    }}
  />;
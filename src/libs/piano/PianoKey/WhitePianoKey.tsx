import { PianoKey } from "./PianoKey";

type PianoKeyProps = {
  pressed: boolean;
  keyName: string;
};

const SIZE = {
  width: 4,
  height: 16,
};

export const WhitePianoKey = ({ pressed, keyName }: PianoKeyProps) =>
  <PianoKey
    pressed={pressed}
    keyName={keyName}
    width={SIZE.width}
    height={SIZE.height}
    style={{
      bgcolor: pressed ? "silver" : "white",
      borderLeft: '1px solid #bbb',
      borderBottom: '1px solid #bbb',
      borderRadius: '0 0 5px 5px',
    }}
  />;

import { BlackPianoKey } from "../PianoKey/BlackPianoKey";
import { WhitePianoKey } from "../PianoKey/WhitePianoKey";

type PianoKeyGroup = {
  pianoKeys: string[];
  checkPressed: (key: string) => boolean;
};

export const PianoKeyGroup = ({ pianoKeys, checkPressed }: PianoKeyGroup) =>
  <>
    {pianoKeys.map((pianoKey, i) =>
      i % 2 === 0 ?
        <WhitePianoKey
          pressed={checkPressed(pianoKey)}
          key={pianoKey}
        />
        : <BlackPianoKey
          pressed={checkPressed(pianoKey)}
          key={pianoKey}
        />
    )}
  </>;
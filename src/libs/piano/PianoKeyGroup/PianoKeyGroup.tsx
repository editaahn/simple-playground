import { Stack } from "@mui/material";
import { BlackPianoKey, WhitePianoKey } from "../PianoKey";

type PianoKeyGroup = {
  pianoKeys: string[];
  checkPressed: (key: string) => boolean;
};

export const PianoKeyGroup = ({ pianoKeys, checkPressed }: PianoKeyGroup) =>
  <Stack direction="row" position="relative">
    {pianoKeys.map((pianoKey, i) =>
      i % 2 === 0 ?
        <WhitePianoKey
          pressed={checkPressed(pianoKey)}
          key={pianoKey}
        />
        : <BlackPianoKey
          pressed={checkPressed(pianoKey)}
          key={pianoKey}
          left={(i + 1) * 2}
        />
    )}
  </Stack>;

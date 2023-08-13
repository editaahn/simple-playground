import { Stack } from "@mui/material";
import { binder } from "../../../utils/binder";
import { usePiano } from "./usePiano";
import { PianoKeySeperator } from "../PianoKeySeperator/PianoKeySeperator";
import { PianoKeyGroup } from "../PianoKeyGroup/PianoKeyGroup";

export const Piano = binder(usePiano, ({ checkPressed, note }) => {
  return (
    <Stack direction="row">
      <PianoKeySeperator note={note}>
        {({ groups }) =>
          <>
            {groups.map(pianoKeys =>
              <PianoKeyGroup pianoKeys={pianoKeys} checkPressed={checkPressed} />
            )}
          </>
        }
      </PianoKeySeperator>
    </Stack>
  );
}, { displayName: 'Piano', memoize: false });
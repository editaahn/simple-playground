import { Stack } from "@mui/material";
import { binder } from "@utils";
import { usePiano } from "./usePiano";
import { PianoKeySeperator } from "../PianoKeySeperator";
import { PianoKeyGroup } from "../PianoKeyGroup";

export const Piano = binder(usePiano, ({ checkPressed, note }) => {
  return (
    <Stack direction="row">
      <PianoKeySeperator note={note}>
        {({ groups }) =>
          <>
            {groups.map(pianoKeys =>
              <PianoKeyGroup pianoKeys={pianoKeys} checkPressed={checkPressed} key={pianoKeys.join()} />
            )}
          </>
        }
      </PianoKeySeperator>
    </Stack>
  );
}, {
  displayName: 'Piano',
  memoize: false
});

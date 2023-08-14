import { Stack } from "@mui/material";
import { binder } from "@utils";
import { usePiano } from "./usePiano";
import { PianoKeySeperator } from "../PianoKeySeperator";
import { PianoKeyGroup } from "../PianoKeyGroup";

export const Piano = binder(usePiano, ({ checkPressed, note }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      padding="30px"
      maxWidth="fit-content"
      borderRadius="5px"
      sx={{
        background: 'linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(174,212,224,1) 63%, rgba(148,228,233,0.7217480742296919) 100%)'
      }}
    >
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

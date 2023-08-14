import { binder } from "@utils";
import { usePiano } from "./usePiano";
import { PianoBezel } from "../PianoBezel";
import { PianoKeySeperator } from "../PianoKeySeperator";
import { PianoKeyGroup } from "../PianoKeyGroup";

export const Piano = binder(usePiano, ({ checkPressed, note }) => {
  return (
    <PianoBezel>
      <PianoKeySeperator note={note}>
        {({ groups }) =>
          <>
            {groups.map(pianoKeys =>
              <PianoKeyGroup pianoKeys={pianoKeys} checkPressed={checkPressed} key={pianoKeys.join()} />
            )}
          </>
        }
      </PianoKeySeperator>
    </PianoBezel>
  );
}, {
  displayName: 'Piano',
  memoize: false
});

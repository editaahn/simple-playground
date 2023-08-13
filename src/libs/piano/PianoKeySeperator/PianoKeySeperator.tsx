import { binder } from "../../../utils/binder";
import { usePianoKeySeperator } from "./usePianoKeySeperator";

export const PianoKeySeperator = binder(
  usePianoKeySeperator,
  ({ children, groups }) => <>{children({ groups })}</>,
  { memoize: false }
);

import { Box } from "@mui/material";

type PianoKeyProps = {
  pressed: boolean;
};

export const WhitePianoKey = ({ pressed }: PianoKeyProps) => (
  <Box bgcolor={pressed ? "silver" : "white"} width={30} height={200} />
);
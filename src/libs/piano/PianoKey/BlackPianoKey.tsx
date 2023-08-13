import { Box } from "@mui/material";

type PianoKeyProps = {
  pressed: boolean;
};

export const BlackPianoKey = ({ pressed }: PianoKeyProps) => (
  <Box bgcolor={pressed ? "gray" : "black"} width={30} height={200} />
);
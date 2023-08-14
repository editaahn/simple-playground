import { Box } from "@mui/material";

type PianoKeyProps = {
  pressed: boolean;
  left: number;
};

export const BlackPianoKey = ({ pressed, left }: PianoKeyProps) => (
  <Box bgcolor={pressed ? "gray" : "black"}
    width="2em"
    height="8em"
    position="absolute"
    border="1px solid #000"
    borderRadius="0 0 3px 3px"
    left={left + 'em'}
    margin="0 0 0 -1em"
    zIndex={2}
  />
);

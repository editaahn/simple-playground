import { Box } from "@mui/material";

type PianoKeyProps = {
  pressed: boolean;
};

export const WhitePianoKey = ({ pressed }: PianoKeyProps) => (
  <Box
    bgcolor={pressed ? "silver" : "white"}
    width="4em"
    height="16em"
    position="relative"
    borderLeft="1px solid #bbb"
    borderBottom="1px solid #bbb"
    borderRadius="0 0 5px 5px"
    zIndex={1}
  />
);
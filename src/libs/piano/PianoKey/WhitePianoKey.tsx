import { Box } from "@mui/material";

type PianoKeyProps = {
  pressed: boolean;
};

const SIZE = {
  width: 4,
  height: 16,
  unit: 'em'
};

export const WhitePianoKey = ({ pressed }: PianoKeyProps) => (
  <Box
    bgcolor={pressed ? "silver" : "white"}
    width={SIZE.width + SIZE.unit}
    height={SIZE.height + SIZE.unit}
    position="relative"
    borderLeft="1px solid #bbb"
    borderBottom="1px solid #bbb"
    borderRadius="0 0 5px 5px"
    boxSizing="border-box"
  />
);
import { Box } from "@mui/material";

type PianoKeyProps = {
  pressed: boolean;
  index: number;
};

const SIZE = {
  width: 2,
  height: 8,
  unit: 'em'
};

export const BlackPianoKey = ({ pressed, index }: PianoKeyProps) => (
  <Box bgcolor={pressed ? "gray" : "black"}
    width={SIZE.width + SIZE.unit}
    height={SIZE.height + SIZE.unit}
    position="absolute"
    border="1px solid #000"
    borderRadius="0 0 3px 3px"
    left={(index * SIZE.width) + (SIZE.width / 2) + SIZE.unit}
    zIndex={2}
  />
);

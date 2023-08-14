import { Box, SxProps, Typography } from "@mui/material";

type PianoKeyProps = {
  pressed: boolean;
  keyName: string;
  width: number;
  height: number;
  style?: SxProps;
};

const UNIT = 'em';

export const PianoKey = ({ pressed, keyName, width, height, style }: PianoKeyProps) => (
  <Box
    bgcolor={pressed ? "silver" : "white"}
    width={width + UNIT}
    height={height + UNIT}
    display="flex"
    boxSizing="border-box"
    alignItems="flex-end"
    justifyContent="center"
    sx={style}
  >
    <Typography variant="subtitle1" fontWeight="bold">
      {keyName}
    </Typography>
  </Box>
);
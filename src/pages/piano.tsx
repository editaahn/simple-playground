import { Piano } from "@libs";
import { Box } from "@mui/system";

export const PianoPage = () => 
  <Box width="100%" height="100%" justifyContent="center" alignItems="center">
    <Piano note={['q', '2', 'w', '3', 'e', '4', 'r', 't', '6', 'y', '7', 'u']} />
  </Box>;

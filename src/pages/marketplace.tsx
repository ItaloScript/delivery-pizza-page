import { Box } from "@mui/material";
import { MarketplaceSections } from "../sections/marketplace";

export default function MarketplacePage() {

  return <Box>
    <MarketplaceSections.Banner />
    <MarketplaceSections.Products />
  </Box>
}
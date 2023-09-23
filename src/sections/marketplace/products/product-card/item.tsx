import { Box } from "@mui/material";
import { ItemBackground } from "./styles";

interface ItemProps {
  children: React.ReactNode;
  isFavorited: boolean;
}

export default function Item({
  children,
  isFavorited
}: ItemProps) {

  return <Box sx={{
    position: 'relative',
  }}>
    <ItemBackground src="/assets/marketplace/products/item-background.svg" isFavorited={isFavorited} />
    <Box sx={{
      position: 'absolute',
      height: '100%',
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      paddingY: 2,
      paddingX: 2,
      boxSizing: 'border-box',
    }}>
      {children}
    </Box>
  </Box>
}
import { useProducts } from "@/context/products";
import { FavoriteButtonContainer } from "./styles";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useTheme } from "@mui/material";


export default function FavoriteButton({
  productId
}: {
  productId: string
}) {

  const { toggleFavoriteById } = useProducts()

  const theme = useTheme()


  return <FavoriteButtonContainer onClick={() => {
    toggleFavoriteById(productId)
  }}>
    <svg width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="gradientColor" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'red', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: theme.palette.primary.main, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <LocalMallIcon sx={{ fill: 'url(#gradientColor)' }} />
    </svg>

  </FavoriteButtonContainer>
}
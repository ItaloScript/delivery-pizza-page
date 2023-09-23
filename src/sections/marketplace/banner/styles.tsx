

import { Box, Typography, styled } from "@mui/material"

export const BannerContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  flexDirection: 'column',
  paddingX: 5,
  boxSizing: 'border-box',
})

export const StoreInfoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
})

export const Title = styled(Typography)({
  fontWeight: 700,
  marginTop: 80,
})

export const Description = styled(Typography)({
  marginTop: 16
})

export const ContainerFoodImages = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  pointerEvents: 'none',
  height: '320px'
})

export const TomatoImage = styled('img')({
  position: 'absolute',
  marginRight: 900,
  top: -0,
  width: '150px',
})

export const TomatoShadowImage = styled('img')({
  position: 'absolute',
  marginRight: 'calc((550*100%)/1000 + 250px)',
  top: -0,
  width: '150px',
})

export const PizzaImage = styled('img')({
  width: '70vw',
  minWidth: 400,
  maxWidth: 900,
  top: 'calc(105% - 370px)',
  marginRight: '-8vw',
  position: 'absolute',
  zIndex: 9999,
})

export const CrocGroupImage = styled('img')({
  position: 'absolute',
  //normal 40vw
  marginRight: 'calc((150*100%)/1000 + 350px)',
  bottom: 200,
  width: '100px',
})

export const PepinoImage = styled('img')({
  position: 'absolute',
  marginRight: -900,
  top: -10,
  width: '250px',
})

export const MushroomImage = styled('img')({
  position: 'absolute',
  marginRight: 850,
  bottom: 90,
  width: '100px'
})

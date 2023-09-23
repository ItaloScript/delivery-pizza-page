
import { Box, Tab, Tabs, styled } from "@mui/material"

export const ContainerSection = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  display: 'flex',
  alignItems: 'center',
  paddingTop: 80,
  flexDirection: 'column',
  minHeight: '1000px'
}))

export const CategoryTabs = styled(Tabs)({
  paddingTop: 50,
  borderBottom: '0px !important',
  width: '30vw',
  minWidth: 400,

})
export const CategoryTab = styled(Tab)({
  padding: '0 60px',
})


export const ProductsContainer = styled('div')({
  width: '70vw',
  marginTop: 20,
  display: 'flex',
  gap: 20,
  flexWrap: 'wrap',
  justifyContent: 'center',
  paddingBottom: 100,
})

import { AppBar, Box, styled } from "@mui/material"

export const TopBar = styled(AppBar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  position: 'static',
  paddingTop: 10,
})

export const PagesContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  gap: 23,
  alignItems: 'center',
  justifyContent: 'center'
})

export const LogoContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const ContainerWorkingInfo = styled(Box)({
  flex: 1,
  display: 'flex',
  gap: 30,
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
})


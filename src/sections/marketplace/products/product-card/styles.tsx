
import { styled } from "@mui/material"


export const Photo = styled('img')({
  height: '180px',
  width: '180px',
  objectFit: 'cover',
  borderRadius: '50%',
  position: 'relative',
  left: '19px',
})


export const Title = styled('span')({
  fontSize: 20,
  fontWeight: 700,
  color: '#242222',
})

export const Description = styled('div')({
  fontSize: 13,
  fontWeight: 600,
  color: '#9e9b9b',
})

export const Price = styled('div')({
  fontSize: 26,
  fontWeight: 700,
})



export const UpdatedAtMutedText = styled('div')({
  fontSize: 12,
  fontWeight: 600,
  color: '#a0a0a0',
  marginTop: 5,
})
export const FavoriteButtonContainer = styled('div')({
  position: 'absolute',
  width: 35,
  height: 35,
  bottom: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  border: '2px solid #dddcdc',
  backgroundColor: '#fff',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    background: 'linear-gradient(to right, red, orange)',
  },
  '&:hover svg': {
    fill: 'white !important',
  }

})


export const ItemBackground = styled('img')(({
  isFavorited,
}: {
  isFavorited: boolean
}) => ({
  filter: isFavorited ?
    `drop-shadow(-1px 0px 2px  #f53808)
drop-shadow(0px 1px 2px  #f8f40f)` : '',
  fill: 'red !important',
  width: '250px',
  '& path': {
    visibility: 'hidden',
  }
}))

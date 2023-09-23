
import { Theme, styled } from "@mui/material"
import { useEffect, useState } from 'react'

function lastUpdatedTime(timestamp: number) {
  const agora = new Date().getTime();
  const diff = agora - timestamp;

  const dias = Math.floor(diff / (24 * 60 * 60 * 1000));
  const horas = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutos = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));

  if (dias > 0) return `Atualizado ${dias} dia(s) atrás`

  if (horas > 0) return `Atualizado ${horas} hora(s) atrás`

  return `Atualizado ${minutos} minuto(s) atrás`

}

const BadgeUpdate = styled('div')(({
  show,
  theme
}: {
  show: boolean,
  theme?: Theme
}) => ({
  fontSize: 12,
  fontWeight: 700,
  alignSelf: 'flex-start',
  color: '#fff',
  backgroundColor: theme?.palette.primary.main,
  borderRadius: 5,
  padding: '2px 5px',
  visibility: show ? 'initial' : 'hidden',
  marginTop: 5,
}))

export default function CountdownUpdate({
  updatedAt
}: {
  updatedAt: number | undefined
}) {

  const [counterTime, setCounterTime] = useState('')

  useEffect(() => {

    if (!updatedAt) return

    const oneMinute = 1000 * 60

    setCounterTime(lastUpdatedTime(updatedAt))

    const interval = setInterval(() => {
      setCounterTime(lastUpdatedTime(updatedAt))
    }, oneMinute)

    return () => clearInterval(interval)
  }, [updatedAt])


  return <BadgeUpdate show={!!updatedAt}>
    {counterTime || '0'}
  </BadgeUpdate>

}
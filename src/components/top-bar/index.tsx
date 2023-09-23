import Toolbar from '@mui/material/Toolbar';
import Image from 'mui-image'
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { ContainerWorkingInfo, LogoContainer, PagesContainer, TopBar } from './styles';

const pages = ['Pagamentos', 'Sobre Nós', 'Contatos'];

export default function Topbar() {

  return <TopBar >
    <Toolbar disableGutters>
      <PagesContainer>
        {pages.map((page) => (
          <Link href="#" underline="none" color={'text.primary'}>
            {page}
          </Link>
        ))}
      </PagesContainer>
      <LogoContainer >
        <Image src="https://seeklogo.com/images/P/Pizza_Hut-logo-FDF59C73F0-seeklogo.com.png" width={80} />
      </LogoContainer>
      <ContainerWorkingInfo>
        <Badge badgeContent={''} variant="dot" color="success" />
        11AM - 9PM
        <Typography variant="subtitle1" fontWeight={700}>
          +1 123 456 7890
        </Typography>
      </ContainerWorkingInfo>
    </Toolbar>
  </TopBar >
}
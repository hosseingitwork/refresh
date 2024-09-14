import LogoImage from '../../public/img/Logo_Fake_No_Name.png'
import Banner from '../../public/img/banner.jpg'
import Image from 'next/image';
import DrawerAppBar from '@/components/NavBar/NavBar';

import { Box, Typography } from '@mui/material';

export default function Home() {


  console.log(LogoImage)

  return (
  
    <body>
      
      {/* SECTIN - toolbar */}
      <DrawerAppBar/>

      {/* SECTION - hero image */}
      <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${Banner.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        color: '#fff',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Dark overlay
          zIndex: 1,  // Ensure it sits behind the text
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: 'bold', mb: 2, zIndex: 2 }}  // zIndex to keep text on top
      >
        Siente la diferencia
      </Typography>
      <Typography variant="h5" sx={{ zIndex: 2 }}>
        Renuevate por dentro y por fuera
      </Typography>
    </Box>
 

    </body>
  );
}

import LogoImage from '../../public/img/Logo_Fake_No_Name.png'
import Banner from '../../public/img/banner.jpg'
import Image from 'next/image';
import DrawerAppBar from '@/components/NavBar/NavBar';
import RowCard from '@/components/RowCard/RowCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import backgroundCalltocation from '../../public/img/calltoaction.jpg'

import { Box, Typography } from '@mui/material';

export default function Home() {

  const sobre_nosotros_items = [{ name: 'Perdida de Peso', icon: <FitnessCenterIcon /> }, { name: 'Piel Refrescante', icon: <MedicalInformationIcon /> }, { name: 'Una Mejor Vida', icon: <FavoriteIcon /> }]

  return (

    <body>

      {/* SECTIN - toolbar */}
      <DrawerAppBar />

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





      {/* SECTION - Who we are */}
      <Box sx={{ textAlign: 'center', backgroundColor: '#f4f4f4' }}>

        <div style={{ padding: '2rem', paddingTop: '5rem' }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', mb: 2, textTransform: 'uppercase' }}  // zIndex to keep text on top
          >
            sobre nosotros
          </Typography>


          <Box sx={{ display: 'flex', marginTop: '3rem', flexDirection: ['column', 'row', 'row'], alignItems: 'center' }} >


            <Box sx={{ width: ['100%', '100%', '45%'], margin: '3rem' }}>

              <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', mb: 2, zIndex: 2, textAlign: 'left' }}  // zIndex to keep text on top
              >
                ¿A qué nos dedicamos?
              </Typography>
              <p style={{ textAlign: 'left', padding: '2rem' }}>En Refresh, transformamos vidas. Nuestra combinación única de asesoramiento en nutrición y tecnología avanzada ayuda a nuestros clientes a alcanzar su mejor versión. Desde perder peso hasta mejorar la piel, estamos comprometidos con tu bienestar y confianza. Únete a nosotros en este apasionante camino hacia una vida más saludable y revitalizada.</p>

            </Box>
            <Box sx={{ width: ['100%', '100%', '55%'] }}>
              {
                sobre_nosotros_items.map(
                  (element) => {
                    return <RowCard title={element.name} icon={element.icon} />
                  }
                )
              }

            </Box>
          </Box>
        </div>
      </Box>


{/* SECTION - texto */}
<Box 
  sx={{ 
    position: 'relative',  // Ensure the overlay stays within this box
    backgroundImage: `url(${backgroundCalltocation.src})`, 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover',
    '::before': {
      content: '""',  // Pseudo-element for the overlay
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent black
      zIndex: 1,
    }
  }}
>
  <Typography
    variant="h4"
    sx={{ 
      position: 'relative',  // Ensure text stays on top of the overlay
      fontWeight: 'bold', 
      mb: 2, 
      textAlign: 'center', 
      padding: '5rem', 
      color: 'white', 
      zIndex: 2,  // Keep the text above the dark overlay
    }}  
  >
    Refresca tu vida, despierta tu potencial
  </Typography>
</Box>
    </body>
  );
}

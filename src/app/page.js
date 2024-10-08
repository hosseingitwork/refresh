import LogoImage from '../../public/img/Logo_Fake_No_Name.png'
import Banner from '../../public/img/banner.jpg'
import Image from 'next/image';
import DrawerAppBar from '@/components/NavBar/NavBar';
import RowCard from '@/components/RowCard/RowCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import backgroundCalltocation from '../../public/img/calltoaction.jpg'
import ActionAreaCard from '@/components/BlogCard/Cards';
import BasicCard from '@/components/ServiceCard/ServiceCard';
import ContactCard from '@/components/ContactUsCard/ContactUsCard';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';


import { Box, Typography } from '@mui/material';

export default function Home() {

  const sobre_nosotros_items = [{ name: 'Perdida de Peso', icon: <FitnessCenterIcon /> }, { name: 'Piel Refrescante', icon: <MedicalInformationIcon /> }, { name: 'Una Mejor Vida', icon: <FavoriteIcon /> }]
  const contactos = [
    {
      title: 'Dirección', info: 'Avenida. loremd jbafjdg aikhjfba niouahfnm 23', icon: <FmdGoodIcon  color="success" sx={{ fontSize:50 }}/>
    },
    {
      title: 'Llámanos', info: '(+52) 55 d3439823', icon: <PhoneEnabledIcon  color="success" sx={{ fontSize:50 }}/>
    },
    { title: 'Correo electrónico', info: 'soporte@gmail.com', icon: <EmailIcon color="success" sx={{ fontSize:50 }}/> },
    { title: 'Horarios', info: ' Lunes a Domingo, 8am - 3pm', icon: <QueryBuilderIcon  color="success" sx={{ fontSize:50 }}/> }
  ]

  return (

    <body style={{ backgroundColor: '#f4f4f4' }}>

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


      {/* SECTION - servicios */}
      <Box sx={{ padding: '2rem', textAlign: 'center' }}>


        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', mb: 2, textTransform: 'uppercase', marginBottom: '2rem' }}  // zIndex to keep text on top
        >
          servicios
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: ['column', 'row', 'row'], alignItems: 'center', gap: '4rem', margin: '1rem' }} >
          <Box sx={{ width: ['100%', '100%', '50%'] }}>
            <BasicCard />
          </Box>
          <Box sx={{ width: ['100%', '100%', '50%'] }}>
            <BasicCard />
          </Box>
        </Box>


        <Box sx={{ display: 'flex', flexDirection: ['column', 'row', 'row'], alignItems: 'center', gap: '4rem', margin: '1rem' }} >
          <Box sx={{ width: ['100%', '100%', '50%'] }}>
            <BasicCard />
          </Box>
          <Box sx={{ width: ['100%', '100%', '50%'] }}>
            <BasicCard />
          </Box>
        </Box>


      </Box>


      {/* SECTION - recent blogs */}
      <Box sx={{ padding: '2rem' }}>

        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', mb: 2, textTransform: 'uppercase' }}  // zIndex to keep text on top
        >
          blogs recientes
        </Typography>

        <Box
          sx={{
            gap: '2rem',
            display: 'flex',
            margin: '2rem',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: { xs: 'column', sm: 'row' }, // column on mobile, row on tablet/desktop
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '33%' } }}>
            <ActionAreaCard image={`${backgroundCalltocation.src}`} title='Come saludable y a tiempo' description='Enim aliqua aliqua in nulla id laborum aliqua elit pariatur aliqua exercitation quis deserunt. Amet in ad veniam aute. Minim enim laboris irure voluptate proident pariatur eiusmod velit ex in sit labore. Est laborum excepteur e.' />
          </Box>

          <Box sx={{ width: { xs: '100%', sm: '33%' } }}>
            <ActionAreaCard image={`${backgroundCalltocation.src}`} title='Come saludable y a tiempo' description='Enim aliqua aliqua in nulla id laborum aliqua elit pariatur aliqua exercitation quis deserunt. Amet in ad veniam aute. Minim enim laboris irure voluptate proident pariatur eiusmod velit ex in sit labore. Est laborum excepteur e.' />
          </Box>

          <Box sx={{ width: { xs: '100%', sm: '33%' } }}>
            <ActionAreaCard image={`${backgroundCalltocation.src}`} title='Come saludable y a tiempo' description='Enim aliqua aliqua in nulla id laborum aliqua elit pariatur aliqua exercitation quis deserunt. Amet in ad veniam aute. Minim enim laboris irure voluptate proident pariatur eiusmod velit ex in sit labore. Est laborum excepteur e.' />
          </Box>
        </Box>
      </Box>


      {/* SECTION - contacts */}
      <Box sx={{ padding: '2rem', textAlign: 'center', backgroundColor: 'white', paddingTop: '5rem' }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', mb: 2, textTransform: 'uppercase', marginBottom: '2rem' }}  // zIndex to keep text on top
        >
          contactos
        </Typography>

        <Box sx={{ display: 'flex', gap:2, flexDirection: ['column', 'row', 'row'], alignItems: 'center', margin: '1rem' }} >
          {contactos.slice(0,2).map(
            (element) => {
              return(
              <Box sx={{ width: ['100%', '100%', '50%'] }}>
                <ContactCard title={element.title} icon={element.icon} info={element.info} />
              </Box>)
            }
          )}
        </Box>

        <Box sx={{ display: 'flex',gap:2, flexDirection: ['column', 'row', 'row'], alignItems: 'center', margin: '1rem' }} >
          {contactos.slice(2,4).map(
            (element) => {
              return(
              <Box sx={{ width: ['100%', '100%', '50%'] }}>
                <ContactCard title={element.title} icon={element.icon} info={element.info} />
              </Box>)
            }
          )}
        </Box>

      </Box>

    </body>
  );
}

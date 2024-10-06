import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: theme.palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundSize: 'cover',
  
}));

export default function Hero() {
  return (
    <Box
      id="ourSchool"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 10, sm: 16 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '90%' } }}
        >
          <br/>
          <Typography
            variant="h1"
            fontWeight={500}
            align='center'
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              color: 'primary.main',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
              Cockfosters Greek School
            </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
            }}
          >
            Our school is a non-political Independent establishment providing education in the Greek language <b>since 1977</b>. We meet in person on Saturdays in the newly built East Barnet School, and have additional online lessons on Wednesday evenings for children in Year 3 and above.
          </Typography>
        </Stack>
        <StyledBox>
        <CardMedia
            component='video'
            image={"assets/videos/drone.webm"}
            autoPlay
            loop
            muted
        />
        </StyledBox>
      </Container>
    </Box>
  );
}
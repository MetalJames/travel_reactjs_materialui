import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { AccessTime } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body2'
                    },
                    style: {
                        fontSize: 11,
                    }
                },
                {
                    props: {
                        variant: 'body2'
                    },
                    style: {
                        fontSize: 9,
                    }
                }
            ]
        }
    }
})

const TourCard = ({tour}) => {
    return  <Grid item xs={12} sm={6} md={4} lg={3}>
    {/* return  <Grid item xs={3}> */}
                <ThemeProvider theme={theme}>
                <Paper elevation={5} square>
                    <img src={tour.image}
                    alt="niagara falls"
                    className='img' />
                    <Box paddingX={1}>
                        <Typography variant='subtitle2' componnent='h2'>
                            {tour.name}
                        </Typography>
                    
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <AccessTime sx={{width: 12.5}}/>
                            <Typography variant='body2' component='p' marginLeft={0.5}>
                                {tour.duration} Hours
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        marginTop={3}>
                            <Rating name="read-only" value={tour.rating} readOnly  precision={0.5} size='small'/>
                            <Typography variant='body2' component='p' marginLeft={0.5}>
                                {tour.rating}
                            </Typography>
                            <Typography variant='body2' component='p' marginLeft={1.5}>
                                ({tour.numberOfReviews} reviews)
                            </Typography>
                        </Box>
                        <Box style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5vw'}}>
                            <Typography variant='h6' component='h3' marginTop={0}>
                                From ${tour.price} CAD
                            </Typography>
                            <Button component={ Link } to={`${tour.id}`} variant='outlined' size='small'>More...</Button>
                        </Box>
                    </Box>
                </Paper>
                </ThemeProvider>
            </Grid>
}

export default TourCard;
import React from 'react'
import { Container, Typography, Box, Grid, Paper, BottomNavigation, CssBaseline } from '@mui/material';
import { ImageCollage, CustomizedAccordions, BasicModal, BasicModalImg } from '../components';
import { useState } from 'react';
import cities from '../data.json';
import { useParams } from 'react-router-dom';

const Tour = () => {

    const [selectedImg, setSelectedImg] = useState(null);
    const params = useParams();
    const isMobile = window.innerWidth <= 500;

    const Loaded = () => (
        <>
        {cities.map ((city) => (
            <div key={city.id}>
                {city.tours.filter(el => el.id === params.id).map(tour => (
                    <div key={tour.id}>
                        <Box key={tour.id}>
                            <Typography style={{fontWeight: 500, textAlign: 'center'}} variant='h4' component='h2' marginTop={5} marginBottom={3}>
                                {tour.name}
                            </Typography>
                            {isMobile ?
                            <>
                                <Box >
                                    <Grid item xs={12} md={8} lg={8}>
                                    <img style={{width: '100%', display: 'flex', justifyContent: 'center', height: 'auto'}} src={tour.image} alt='some'/>
                                    </Grid>
                                    <Grid item xs={12} md={4} lg={4} style={{display: 'flex', justifyContent: 'center', marginLeft: '-6px', marginTop: '10px'}}>
                                    <ImageCollage setSelectedImg={setSelectedImg}/>
                                    </Grid>
                                    { selectedImg &&  <BasicModalImg selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
                                </Box>
                            </>
                            :
                            <>
                                <Box marginTop={3} style={{display: 'flex', justifyContent: 'flex-start'}}>
                                    <Grid item xs={12} md={8} lg={8}>
                                    <img style={{width: '100%', display: 'flex', justifyContent: 'center', height: 325}} src={tour.image} alt='some'/>
                                    </Grid>
                                    <Grid item xs={12} md={4} lg={4} style={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <ImageCollage setSelectedImg={setSelectedImg}/>
                                    </Grid>
                                    { selectedImg &&  <BasicModalImg selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
                                </Box>
                            </>
                            }
                            <Box>
                                <Typography variant='h6' component='h4' marginTop={3}>
                                    Price: ${tour.price} CAD
                                </Typography>
                                <Typography variant='h6' component='h4'>
                                    Duration: {tour.duration} hours
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='h6' component='h4' marginTop={3}>
                                    About this ticket
                                </Typography>
                                <Typography variant='paragraph' component='p' marginTop={3} xs={12} sm={6} me={4} lg={1}>
                                    {tour.about}
                                </Typography>
                            </Box>
                            <Box marginBottom={10}>
                                <Typography variant='h6' component='h4' marginTop={3} marginBottom={2}>
                                    Frequently Asked Questions
                                </Typography>
                                <CustomizedAccordions />
                            </Box>
                            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                                <BottomNavigation>
                                    <BasicModal />
                                </BottomNavigation>
                            </Paper>
                        </Box>
                    </div>
                ))}
            </div>
        ))}
        </>
    )

    return (
        <>
            <CssBaseline />
            <Container xs={12} sm={6} me={4}>
                    <Loaded />
            </Container>
        </>
    )
}

export default Tour;
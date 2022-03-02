import React from 'react'
import TourCard from '../components/TourCard';
import cities from '../data.json';
import { Container, Grid, Typography } from '@mui/material';
import { CssBaseline } from '@material-ui/core';

const Home = () => {
    return (
        <>
        <CssBaseline />
        <div className="App">
        <Container sx={{marginY: 5}}>
            {cities.map ((city) => (
            <div key={city.id}>
                <Typography variant='h4' component='h2' marginTop={5} marginBottom={3}>
                Top {city.name} Tours
                </Typography>
                <Grid container spacing={2}>
                {city.tours.map((tour, index) => <TourCard tour={tour} key={index} />)}
                </Grid>
            </div>
            ))}
        </Container>
        </div>
        </>
    );
}

export default Home;

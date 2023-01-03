import React from 'react'
import { Container,
        Grid,
        Typography,
        Card ,
        CardActionArea ,
        CardContent ,
        CardMedia ,
        makeStyles 
    } from '@material-ui/core'

const backgroudImg = require('../Image/bgImg.jpg');
const locationImg = require('../Image/location.png');
const homeserviceImg = require('../Image/homeService.jpg');

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '0px',
        padding: '0px',
        position: 'relative',
        overflow: 'hidden',
    },
    mainImg: {
        backgroundImage: `url(${backgroudImg})`,
        height: '700px',
        backgroundSize: 'intial',
        margin: '0px',
    },
    feature:{
        display:'inline-block',
        
    },
    header: {
        fontSize: '80px',
        color: 'white',
        textAlign: ' center',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        height: 'fit-content',
        margin: 'auto',
    },
}));

const Home = () => {
    const classes = useStyles()
    return (
        <>
            <Container className={classes.container} maxWidth="lg">
                <Grid item className={classes.mainImg}>
                    <Typography variant="subtitle1" gutterBottom className={classes.header}>
                        Book Your Spot For Washing Your Vehicle
                    </Typography>
                </Grid>


                <Grid container spacing={2} >
                  <Typography variant='h2' className='feature'>Features</Typography>
                  <Grid item xs={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" height="140" image={locationImg} alt="green iguana" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Multiple Locations
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    We provide our services in a multiple cities ,in order to provide quick service to our Customers.Also we provide the faciltiy of booking an online Slots at the comfort of your place.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                   </Grid>
                   <Grid item xs={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" height="140" image={homeserviceImg} alt="green iguana" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                   Home Service
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    We make our Customer always happy by providing various features.To save your time we provide Home Services to our Customer , so that they can save their precious time.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                 </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home

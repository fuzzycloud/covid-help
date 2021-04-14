import React from 'react';
import { ListItem, Divider, Grid, Typography, List } from '@material-ui/core';
import { tiffin_service_data } from '../../data/tiffin_service';
import * as _ from 'lodash';
import { InferGetStaticPropsType } from 'next';
export const TiffinServiceList = ({ addresses }: InferGetStaticPropsType<typeof getStaticProps>) => {
    console.log(addresses);
    return (
        <div>
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Title 1
                </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        b-9, street name, city-CityName, District-DistName pinNo-456123
                </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Contact: 9653201489
                </Typography>
                                </Grid>

                            </Grid>
                            {/* <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid> */}
                        </Grid>
                    </Grid>
                </ListItem>
                <Divider />
                <ListItem button>

                    <Grid container spacing={2}>

                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Title 1
                </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        b-9, street name, city-CityName, District-DistName pinNo-456123
                </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Contact: 9653201489
                </Typography>
                                </Grid>

                            </Grid>
                            {/* <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid> */}
                        </Grid>
                    </Grid>

                </ListItem>
                <Divider />
                <ListItem button>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Title 2
                </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        b-9, street name, city-CityName, District-DistName pinNo-456123
                </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Contact: 9653201489
                </Typography>
                                </Grid>

                            </Grid>
                            {/* <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid> */}
                        </Grid>
                    </Grid>
                </ListItem>
                <Divider />
                {/* <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink> */}
            </List>
        </div>
    )
}


export const getStaticProps = async ({ params }) => {
    const addresses = _
        .filter(tiffin_service_data, x => x.address.city === params.city && x.address.state === params.state);
    return {
        props: {
            addresses
        }
    }
}

type SlimAddress = {
    state: string;
    city: string;
}

export const getStaticPaths = async () => {
    const addresses = _
        .chain(tiffin_service_data)
        .map(x => ({ state: x.address.state, city: x.address.city } as SlimAddress))
        .uniqBy(x => `${x.state}-${x.city}`)
        .value()
        ;
    const paths = _.map(addresses, x => ({
        params: x
    }))

    return { paths, fallback: false }
}

export default TiffinServiceList;

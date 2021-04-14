import React from 'react';
import { ListItem, Divider, Grid, Typography, List, ListItemText } from '@material-ui/core';
import { tiffin_service_data } from '../../../data/tiffin_service';
import * as _ from 'lodash';
import { InferGetStaticPropsType } from 'next';
export const TiffinServiceList = ({ tiffins }: InferGetStaticPropsType<typeof getStaticProps>) => {
    if (tiffins) {
        return (
            <div>
                <List>
                    {tiffins.map((x, i) => (
                        <li>
                            <ListItem key={`${x}-${i}`} >
                                <ListItemText primary={x.name} secondary={
                                    <React.Fragment>
                                        <Typography variant="body1" gutterBottom>
                                            {x.details}
                                        </Typography>
                                        {x.contacts.map(y => (<Typography variant="body2" gutterBottom>
                                            {y.name} : <a href={`tel:${y.mobileNo}`}>{y.mobileNo}</a>
                                        </Typography>))}
                                    </React.Fragment>
                                } />
                            </ListItem>
                            <Divider />
                        </li>
                    ))}
                </List>
            </div>
        )
    }
    return null;
}


export const getStaticProps = async ({ params }) => {
    const tiffins = _
        .filter(tiffin_service_data, x => x.address.city.toLowerCase() === params.city.toLowerCase() && x.address.state.toLowerCase() === params.state.toLowerCase());
    return {
        props: {
            tiffins
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
        .map(x => ({ state: x.address.state.toLowerCase(), city: x.address.city.toLowerCase() } as SlimAddress))
        .uniqBy(x => `${x.state}-${x.city}`)
        .value()
        ;
    const paths = _.map(addresses, x => ({
        params: x
    }))

    return { paths, fallback: false }
}

export default TiffinServiceList;

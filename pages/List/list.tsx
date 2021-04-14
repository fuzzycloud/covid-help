import React from 'react';
import {MenuItem,ListItem,ListItemText,Divider,Grid,Paper,Typography ,List}from '@material-ui/core';
export default function Service_List() {
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
        <Divider/>
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
        <Divider/>
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
        <Divider/>
        {/* <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink> */}
      </List>
        </div>
            )
}
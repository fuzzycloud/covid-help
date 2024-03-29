import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Info } from '../types/info';
type InfoViewProps = {
  data: Info[];
};
const InfoView = ({ data }: InfoViewProps) => {
  return (
      <List>
        {data.map((x, i) => (
            <ListItem key={`${i}`}>
              <ListItemText
                primary={x.name}
                secondary={
                  <React.Fragment>
                    <Typography variant="body1" gutterBottom>
                      {x.details}
                    </Typography>
                    {x.contacts.map((y) => (
                      <Typography variant="body2" gutterBottom>
                        {y.name} :{' '}
                        <a href={`tel:${y.mobileNo}`}>{y.mobileNo}</a>
                      </Typography>
                    ))}
                  </React.Fragment>
                }
              />
              <Divider />
            </ListItem>
        ))}
      </List>
  );
};

export default InfoView;

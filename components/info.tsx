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
    <div>
      <List>
        {data.map((x, i) => (
          <li>
            <ListItem key={`${x}-${i}`}>
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
            </ListItem>
            <Divider />
          </li>
        ))}
      </List>
    </div>
  );
};

export default InfoView;

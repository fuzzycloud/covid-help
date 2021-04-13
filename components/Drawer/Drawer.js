import React from "react";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  MenuList
} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import Footer from '../Footer/footer'
import { Router, Route, Link } from "react-router-dom";
const styles = theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

class DrawerComponent extends React.Component {
  state = {
    left: false
  };

  render() {
    const { classes } = this.props;

    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={this.props.toggleDrawerHandler}
        onKeyDown={this.props.toggleDrawerHandler}
      >
        <List>
          {/* {["Home", "Contact Us"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <HomeIcon /> : <ContactsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
          <ListItem button  >
          <ListItemIcon><HomeIcon /></ListItemIcon> <ListItemText>
            <a href="Home/home">Home</a>
            </ListItemText>
          
        </ListItem>
        <ListItem button  >
          <ListItemIcon><ContactsIcon /></ListItemIcon> <ListItemText>
           <a href="Contact/contact">Contact Us</a> 
            </ListItemText>
        </ListItem>
        </List>
       
        <Divider />
        <Footer/>
        
      </div>
    );

    return (
      <Drawer open={this.props.left} onClose={this.props.toggleDrawerHandler}>
        {sideList("left")}
      </Drawer>
    );
  }
}

export default withStyles(styles)(DrawerComponent);

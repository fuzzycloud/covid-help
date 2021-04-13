import React from "react";
import ToolbarComponent from "../components/Toolbar/Toolbar";
import DrawerComponent from "../components/Drawer/Drawer";
import { Router, Route, Link } from "react-router-dom";
import Home from "../pages/Home/home";
class App extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = () => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }

    this.setState({ left: false });
  };

  openDrawer = () => {
    this.setState({
      left: true
    });
  };

  render() {
    return (
      <div className="App">
        {/* <Router> */}
        <ToolbarComponent openDrawerHandler={this.openDrawer} />
        <DrawerComponent
          left={this.state.left}
          toggleDrawerHandler={this.toggleDrawer}
        />
        
          {/* <main >
        <Route exact path="/" component={Home} />
         <Route path="/grid" component={Grid} />
    </main>
    </Router> */}
      </div>
    );
  }
}
export default App;


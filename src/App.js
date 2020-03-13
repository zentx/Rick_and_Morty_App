import React, { Component } from 'react';
import { Route, HashRouter, Switch } from "react-router-dom";
import { Header, Posts, Comments, Footer, NoMatch } from './components'; 
import { GlobalStyles } from './global';
import './lib/bootstrap/dist/css/bootstrap.min.css';

class DivApp extends Component{

  constructor(props) {
    super(props);
    this.state = {
        homeActive: false,
        charaActive: false,
    };
  }

  highHome() {
    this.setState({ homeActive: true,
                    charaActive: false});
  }

  highChara() {
    this.setState({ homeActive: false,
                    charaActive: true});
  }

  render(){
    return(
      <div className="App">
        <Header home={ this.state.homeActive } chara={ this.state.charaActive } />
            <div className="content">
              <Switch>
                <Route exact path="/" render={(props) => <Posts {...props} updateHome={ this.highHome.bind(this) } />} />
                <Route path="/posts/:id" render={(props) => <Comments {...props} updateChara={ this.highChara.bind(this) } />} />
                <Route component={NoMatch}/>
              </Switch>
            </div>
        <Footer />
      </div>
    );
  }
}

function App() {
  return (
    <>
    <GlobalStyles />
      <HashRouter>
        <DivApp />
      </HashRouter>
    </>
  );
}

export default App;

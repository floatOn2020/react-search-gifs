import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import Giflist from './gif_list.jsx';

const GIPHY_KEY= 'LEw1n0mbDshbxELqzymTJ5b82mAfyGBY';

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        gifs: [
          {id: "GnCc88zZhSVUc"},
          {id: "4Vtk42BGiL1T2"},
          {id: "12NUbkX6p4xOO4"},
          {id: "6kLewe4FMUhHO"},
          {id: "PiQejEf31116URju4V"},
          {id: "RrVzUOXldFe8M"},
          {id: "1iTX9tGRTTTVZb7q"},
          {id: "3o6UB0tWKBDSJlIHRK"},
          {id: "hTh9bSbUPWMWk"},
          {id: "Z9u2xF6EzOjssl1dfT"},
          {id: "ZG719ozZxGuThHBckn"}
        ],
        selectedGifId: "xT9IgpernHLP5eWOY0"
      };
    }

    search = (query) => {
      giphy({apiKey: GIPHY_KEY, https: true}).search({
          q: query,
          rating: 'g',
          limit:20
      }, (error, result) => {
          this.setState({
           gifs: result.data
          });
      });
    }
    
    selectGif = (id) => {
      this.setState({
        selectedGifId: id
      });
    }

    render() {
      return (
        <div>
          <div className="left-scene">
              <SearchBar searchFunction={this.search}/>  
              <div className="selected-gif">
                <Gif id={this.state.selectedGifId} />
              </div>
          </div>
          <div className="right-scene">
              <Giflist gifs={this.state.gifs} selectGif={this.selectGif} />
          </div>
        </div>
      );
    }
  }

  export default App;

// class Giflist extends Component {
//     renderList = () => {
//         ;
//     }

//     render() {
//         return (
//             <div className="gif-list">
//                 {this.props.gifs.map(gif => return <Gif id={gif.id} key={gif.id} />)}
//             </div>
//         )
//     }
// }

import React from 'react';
import Gif from './gif';

const GifList = (props) => {
    return (
      <div className="gif-list">
        {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
      </div>
    );
  };
  
export default GifList;
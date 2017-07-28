import React from 'react';
import { intro } from './text';
import './styles/intro.css';

export default class Intro extends React.Component {

  render() {
    let divs = [];
    for (let i = 0; i < intro.length; i++) {
        divs.push(<div className="intro" dangerouslySetInnerHTML={{ __html: intro[i] }}></div>);
    }
    // const text = intro.map((paragraph) => {
    //   return '<p>' + paragraph + '</p>';
    // });

    return (
      <div>
          { divs }
      </div>
    );
  }
}

import React from 'react';
import Story from './story'
import './styles/navigation.css';

export default class Navigation extends React.Component {

  render() {
    return (
      <nav>
        <ul>
          <li><Story /></li>
          <li><button onClick={(e) => this.handleClick(e)}>Latest</button></li>
          <li><button onClick={(e) => this.handleClick(e)}>Contact</button></li>
        </ul>
      </nav>
    );
  }
}

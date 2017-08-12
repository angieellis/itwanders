import React from 'react';
import ReactModal from 'react-modal';
import { story } from './text';
import './styles/story.css';

class Story extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      step: 1
    };

    // This binding is necessary to make `this` work in the callback
    this.onClick = this.onClick.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.getContent = this.getContent.bind(this);
  }

  onClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  onOpen() {
    console.log('on open');
  }

  onClose() {
    console.log('on close');
  }

  getContent() {
    let divs = [];
    for (let i = 0; i < story.length; i++) {
        divs.push(<div className="story" dangerouslySetInnerHTML={{ __html: story[i] }}></div>);
    }
    return divs;
  }

  render() {
    let divs = [];
    for (let i = 0; i < story.length; i++) {
        divs.push(<div className="story" dangerouslySetInnerHTML={{ __html: story[i] }}></div>);
    }

    return (
      <button onClick={(e) => this.onClick(e)}>Story
        <ReactModal
          className="modal"
          isOpen={ this.state.isOpen }
          onAfterOpen={ this.onOpen }
          onRequestClose={ this.onClose }
          contentLabel="Our Story"
          role="dialog"
        >
          <span className="close">X</span>
          <h1>Our Story</h1>
          { divs }
          <i className="right-arrow"></i>
        </ReactModal>
      </button>
    );
  }
}

export default Story;

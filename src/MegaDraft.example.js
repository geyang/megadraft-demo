/**
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from 'react';
import Highlight from '@episodeyang/react-highlight.js';
import autobind from 'autobind-decorator';
import Megadraft, {editorStateFromRaw} from 'megadraft';
import 'megadraft/dist/css/megadraft.css';

var {number, string} = PropTypes;

const style = {
  border: '0px solid black',
  minHeight: '200px',
  padding: '24px',
  borderRadius: '4px',
  boxShadow: '0 0 24px pink'
};

export default class ProseMirrorExample extends Component {
  componentWillMount() {
    const editorState = editorStateFromRaw(null);
    this.setState({editorState})
  }

  @autobind
  onChange(editorState) {
    console.log('on change! ', editorState);
    this.setState({editorState})
  }

  render() {
    const {editorState} = this.state;
    return (
      <div style={style}>
        <Megadraft editorState={editorState} onChange={this.onChange}/>
      </div>
    );
  }
}

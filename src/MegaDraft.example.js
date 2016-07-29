/**
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from 'react';
import Highlight from "@episodeyang/react-highlight.js";
import autobind from 'autobind-decorator';
import {ContentState, convertFromRaw} from 'draft-js';
import Megadraft, {editorStateFromRaw, editorStateToJSON} from 'megadraft';
import {stateToMarkdown} from 'draft-js-export-markdown';
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
    let rawState = editorStateToJSON(editorState);
    console.log('raw state ', rawState);
    let blockArray = convertFromRaw(JSON.parse(rawState));
    console.log('blockArray', blockArray);
    let markdown = stateToMarkdown(blockArray);
    console.log('markdown', markdown);
    this.setState({editorState: editorState, markdown});
  }

  render() {
    const {editorState, markdown} = this.state;
    return (
      <div>
        <div style={style}>
          <Megadraft editorState={editorState} onChange={this.onChange}/>
        </div>
        <Highlight>
          {markdown}
        </Highlight>
      </div>
    );
  }
}

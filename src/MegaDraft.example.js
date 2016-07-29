/**
 * Created by ge on 6/23/16.
 */
import React, {Component, PropTypes} from 'react';
import Highlight from "@episodeyang/react-highlight.js";
import autobind from 'autobind-decorator';
import {EditorState, ContentState, convertFromRaw} from 'draft-js';
import Megadraft, {editorStateFromRaw, editorStateToJSON} from 'megadraft';
import {stateFromMarkdown} from 'draft-js-import-markdown';
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

const placeholderMarkdown = `
# What is your story today?

## Megadraft is an editor built with Draft.js

It allows you to write as if you are on [medium](https://www.medium.com). To style the text, try **highlight** a portion of the text. Currently we allow a few built-in inline styles and lists:

1. inline styles: bold, italic (emphasis)
2. links [like this](http://www.episodeyang.com)
3. lists, both ordered and unordered.
`;
export default class ProseMirrorExample extends Component {
  componentWillMount() {
    // const editorState = editorStateFromRaw(null);
    const editorState = EditorState.createWithContent(stateFromMarkdown(placeholderMarkdown));
    this.setState({editorState, markdown: placeholderMarkdown})
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

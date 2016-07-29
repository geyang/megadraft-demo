/**
 * Created by ge on 7/21/16.
 */
import React from "react";
import Markdown from "react-markdownit";

import Highlight from "@episodeyang/react-highlight.js";
import PropsTable from "react-component-props-table";

import MegaDraftExample from "../MegaDraft.example";
import MegaDraftSource from "!!raw!../MegaDraft.example";
// import MegaDraftAST from "!!react-docgen!../MegaDraft";

export default function Readme() {
  return (
    <Markdown stripIndent={true}>
      {`
      # React-MegaDraft demo

      ## About this

      This is a demo page for megadraft.

      ## Usage
      `}
      <Highlight>{`npm install @episodeyang/megadraft-demo`}</Highlight>
      {`
      ### How is this README written:
      This readme is written with react and markdown. It includes:
      1. a **live megadraft-demo component demo**
      2. a table of the component's props that is generated automatically
      3. **source** of the example component

      ## Example Component: \`MegaDraft\`
      `}
      ### Props
      {`This table below is generated automatically`}
      ### Demo
      {`
      Below is a live demo. You can open the Chrome React developer tool to look at the updated props.
      `}
      <MegaDraftExample/>
      {`
      ### Known Issues

      There are a few known issues that I am working on. However feel free to file whatever problem you ran into
      on github! You can get there by clicking the issue tracker on the top right of this page.

      ### Usage Example

      The source code below of the example above is loaded using the webpack raw loader.`}
      <Highlight>{MegaDraftSource}</Highlight>
      {`
      ## Develop

      1. first run \`npm install\`
      2. now install prosemirror. Because it is a peer dependency, you need to
         install it separately.

        ~~~shell
        npm install prosemirror
        ~~~
      3. Now make your changes, then git commit. Use \`serve-docs\` to view live update at [http://localhost:5000](http://localhost:5000).
      4. run \`build-docs\`, \`build-static-docs\`, \`gh-pages\`
      5. Then remember to push to master.
      `}
    </Markdown>
  )
}

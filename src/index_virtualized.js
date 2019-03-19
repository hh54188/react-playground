import React from "react";
import ReactDOM from "react-dom";

import "react-virtualized/styles.css";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import List from "react-virtualized/dist/commonjs/List";

function App() {
  return (
    <AutoSizer>
      {({ width, height }) => (
        <List
          ref="List"
          height={height}
          overscanRowCount={10}
          rowCount={10}
          rowHeight={50}
          width={width}
          rowRenderer={({ index, isScrolling, key, style }) => (
            <div key={key} style={style}>
              Scrolling...
            </div>
          )}
        />
      )}
    </AutoSizer>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));

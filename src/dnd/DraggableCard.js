import React from "react";
import { DragSource } from "react-dnd";

const TYPE_CARD = "TYPE_CARD";

const cardSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),

    canDrag: monitor.canDrag(),
    isDragging: monitor.isDragging(),
    didDrop: monitor.didDrop()
  };
}

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { connectDragSource, canDrag, isDragging } = this.props;
    return connectDragSource(<div>Card</div>);
  }
}

export default DragSource(TYPE_CARD, cardSource, collect)(Card);

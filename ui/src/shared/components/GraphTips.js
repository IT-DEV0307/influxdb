import React from 'react'
import ReactTooltip from 'react-tooltip'

const GraphTips = React.createClass({
  render() {
    const graphTipsText =
      '<h1>Graph Tips:</h1><p><code>Click + Drag</code> Zoom in (X or Y)<br/><code>Shift + Click</code> Pan Graph Window<br/><code>Double Click</code> Reset Graph Window</p>'
    return (
      <div
        className="graph-tips"
        data-for="graph-tips-tooltip"
        data-tip={graphTipsText}
      >
        <span>?</span>
        <ReactTooltip
          id="graph-tips-tooltip"
          effect="solid"
          html={true}
          offset={{top: 2}}
          place="bottom"
          class="influx-tooltip place-bottom"
        />
      </div>
    )
  },
})

export default GraphTips

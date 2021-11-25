import PropTypes from 'prop-types'

function Stack({ children, spacing = 2, direction = "row", warp = false }) {
  const style  = {
    display: "flex",
    gap: `${spacing * 0.5}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
  }

  return <div style={style}>{children}</div>
}

Stack.propTypes = {
  spacing: PropTypes.number,
  warp: PropTypes.bool,
  direction: PropTypes.oneOf(["row", "column"])
}

export default Stack

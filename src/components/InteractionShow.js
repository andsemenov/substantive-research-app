const MAX_HEIGHT_GRAPH = 150;
const InteractionShow = ({ title, value }) => {
  const stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    return `hsl(${hash % 360}, 85%, 35%)`;
  }

  return  <div className="column">
  <div className="card">
    <p>{title}: {Math.round(1000 * value) / 10 + "%"}</p>
    <div style=
      {{ height: `${MAX_HEIGHT_GRAPH * value}px`, background: `${stringToColor(title)}`}}>
    </div>
  </div>
  </div>
}

export default InteractionShow;
const style = {
  backgroundColor: '#36FF94',
}
const gridS = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,300px))",
  gridGap: "4rem"
}
const planetColor = (atr1) => {
  let color1
  let color2 = "#EEEEEE"
  switch (atr1) {
    case 'desert':
      color1 = "#E3AC36"
      break
    case 'grasslands':
      color1 = "#78E049"
      break
    case 'mountains':
      color1 = "#E3D7BA"
      break
    case 'jungle':
    case 'forest':
      color1 = "#23726A"
      break
    case 'rainforests':
      color1 = "#19685A"
      break
    case 'gas giant':
      color1 = "#B79138"
      break
    case 'ocean':
      color1 = "#285974"
      break
    case 'grassy hills':
      color1 = "#78E049"
      break
    case 'swamp':
      color1 = "#2E1B66"
      break
    case 'cityscape':
      color1 = "#8A8A8A"
      break
    case 'volcanoes':
      color1 = "#DB2700"
      break
    case 'fungus forests':
      color1 = "#678A63"
      break
    case 'rock':
      color1 = "#D5CB98"
      break
    case 'airless asteroid':
      color1 = "#1c1c1c"
      break
    case 'tundra':
      color1 = "#A3BDBC"
      break
    case 'glaciers':
      color1 = "#6cfdff"
      break
    case 'oceans':
      color1 = "#00338B"
      break
    case 'forests':
      color1 = "#00390A"
      break
    default:
      color1 = '#D7CCCD'
      break
  }
  return `linear-gradient(30deg,${color2},${color1})`
}

exports.style = style
exports.gridS = gridS
exports.planetColor = planetColor
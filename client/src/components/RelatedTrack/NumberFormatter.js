const numberFormatter = (prop) => {
  let propStr = '';
  if (prop >= 1000000) {
    const divProp = prop / 1000000;
    console.log(divProp);
    if ((divProp) % 1 >= 0.01) {
      propStr = `${(divProp).toString().substring(0, 4)}M`;
    } else {
      propStr = `${Math.round(divProp).toString()}M`;
    }
  } else if (prop >= 10000) {
    const divProp = prop / 1000;
    if (divProp >= 100) {
      propStr = `${(divProp).toString().substring(0, 3)}K`;
    } else if (divProp % 1 >= 0.1) {
      propStr = `${(divProp).toString().substring(0, 4)}K`;
    } else {
      propStr = `${Math.round(divProp).toString()}K`;
    }
  } else if (prop >= 1000) {
    const temp = prop.toString();
    propStr = `${temp.substring(0, 1)},${temp.substring(1)}`;
  } else {
    propStr = prop.toString();
  }
  return propStr;
};

export default numberFormatter;

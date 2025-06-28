const timeFormat = (minutes) => {

    const hours = Math.floor(minutes/60);

    const rem= minutes % 60;

    return `${hours}h ${rem}m`;
}

export default timeFormat;
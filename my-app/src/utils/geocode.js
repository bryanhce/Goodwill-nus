const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    decodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoibnJhbWFwdXJhdGgiLCJhIjoiY2t3enJtdnA4MDlnbzJycWw3MTFqZWdldiJ9.QwnZsUNpzGNyn_HIwQVEtA&limit=1";
  fetch(url)
    .then((response) => {
      if(response.status !== 200) {
        console.log('Problem. Status code: ' + response.status);
        callback('Error. Status code: ' + response.status, undefined);
        return;
      }
      response.json().then((data) => {
        console.log(data.features[0].center);
        callback(undefined, {
          latitude: data.features[0].center[1],
          longitude: data.features[0].center[0]
        });
      })
    })
    .catch((err) => {
      console.log('Fetch error', err);
      callback('Fetch error', undefined);
    })
};

export default geocode;
export function getAllMovie(){
    return fetch('http://api.tvmaze.com/schedule/full')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => { console.error(error); });
}
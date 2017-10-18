export function getAllMovie(){
    return fetch('https://dog.ceo/api/breed/hound/images')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => { console.error(error); });
}
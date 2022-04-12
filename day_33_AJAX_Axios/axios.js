//===================AXIOS library=====================
// When the promise is resolved, you immediately get the data, you don't have to parse it like we have to do it with Fetch
// axios.get('https://catfact.ninja/fact')
//     .then(res => {
//         console.log(res.data.fact)
//     })
//     .catch(e => {
//         console.log('Error. Data request denied.', e)
//     })

//============Async Function using Axios==================
const randomCatFact = async () => {
    try {
        const res = await axios.get('https://catfact.ninja/fact');
        console.log(res.data.fact);
    } catch (e) {
        console.log('Error. The request denied.', e);
    }
}
randomCatFact();
//===================AXIOS library=====================
// When the promise is resolved, you immediately get the data, you don't have to parse it like we have to do it with Fetch
axios.get('https://catfact.ninja/fact')
    .then(res => {
        console.log(res.data.fact)
    })
    .catch(e => {
        console.log('Error. Data request denied.', e)
    })





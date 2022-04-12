const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault(); //Prevents the default behaviour of an element, in this case, the redirection of a form
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=`, config);
    addImg(res.data);
    forms.elements.query.value = '';
})

const addImg = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}

// Select Form Element
const form = document.querySelector('#searchForm');

//Add Event listener & API request
form.addEventListener('click', async (e) => {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const paramAPI = { params: { q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=`, paramAPI)
    addImg(res.data);
    form.elements.query.value = '';
})

//Function to append image to the body o fhe page
const addImg = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}
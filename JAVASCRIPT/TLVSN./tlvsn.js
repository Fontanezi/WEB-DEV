const displayArea = document.querySelector('.displayArea');
const searchForm = document.querySelector('.query');
const searchValue = searchForm.value;
let phrase = document.querySelector('.phrase');
phrase.innerText = "Search for millions of TV shows";
let searchBar = document.querySelector('.srchbar');
let qry = searchValue;


const searchShow = async (qry) => {
    const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${qry}`);
    const resArr = result.data;
    for (i = 0; i < resArr.length; i++) {
        let imgShow = resArr[i].show.image.medium;
        let newTemp = document.createElement('img');
        newTemp.src = imgShow;
        displayArea.append(newTemp);
        newTemp.className = "m-2 thumb";
    };
};


searchForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
});

searchBar.addEventListener('input', async function (evt) {
    evt.preventDefault();
    if (searchBar.value === "") {
        phrase.innerText = "Search for millions of TV shows"
        document.body.style.backgroundImage = "url('https://4kwallpapers.com/images/wallpapers/ios-13-stock-ipados-red-black-background-amoled-ipad-hd-1680x1050-792.jpg')"
    } else {
        phrase.innerText = "";
        document.body.style.backgroundImage = "url('')";
    };

    displayArea.innerHTML = "";
    searchShow(searchBar.value);
});
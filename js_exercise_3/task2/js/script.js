const searchBar = document.querySelector('.searchBar');
const searchResult = document.querySelector('.searchResult');

let userArr = ["Ashish Shah",
    "Rashmin Chhatrala",
    "Yash Dubey",
    "Prakash Jain",
    "Yashraj Singh",
    "Viraj Sinha",
    "Rajesh Kumar",
    "Mahesh Marwadi",
    "Suresh Sahni",
    "Amar Vilas",
    "Virdas Singhania",
    "Rajeshwari Bindra",
    "Birendra Bhalerao",
    "Virendra Bhupati",
    "Bhupendra Singh",
    "Bhuvam Bam",
    "Shri Raj",
    "Prashant Kamle",
    "Kamlesh Tomar",
    "Aman Gupta",
    "Rishi Kohli",
    "Kunwar Kharwanda",
    "Kartik Koli",
    "Komal Jain",
    "Kartikey Pandey"
]

const showSearchResult = (resultArr) => {
    searchResult.innerHTML = '';
    for (const item of resultArr) {
        searchResult.innerHTML += `<p class='h6 mb-0 ml-3'>${item}</p>`;
    }
}

function search() {
    let resultArr = userArr.filter(user => {
        if(user.toLocaleLowerCase().includes(searchBar.value.toLocaleLowerCase())) {
            return user;
        }
    })
    showSearchResult(resultArr);
}


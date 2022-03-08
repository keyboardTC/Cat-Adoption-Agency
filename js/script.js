
// ======= Generate Random Numbers
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
} 

//  ========= Cat Array ======================
let cat_array_list = [
    {
       name: "Kelly",
       age: `${getRandomArbitrary(1,6)}` ,
       pic: 'cat1.jpg'
    },
    {
       name: "ruby",
       age: `${getRandomArbitrary(1,6)}` ,
       pic: 'cat2.jpg'
    },
    {
       name: "paul",
       age: `${getRandomArbitrary(1,6)}` ,
       pic: 'cat3.jpg'
    },
    {
       name: "sam",
       age: `${getRandomArbitrary(1,6)}` ,
       pic: 'cat4.jpg'
    },
    {
       name: "jimmy",
       age: `${getRandomArbitrary(1,6)}` ,
       pic: 'cat5.jpg'
    },
    {
       name: "ben",
       age: `${getRandomArbitrary(1,6)}` ,
       pic: 'cat6.jpg'
    },
    {
       name: "tata",
       age: `${getRandomArbitrary(1,6)}` ,
       pic: 'cat7.jpg'
    },
    {
       name: "billy",
       age: `${getRandomArbitrary(1,6)}` ,
       pic: 'cat8.jpg'
    },
    {
       name: "skippy",
       age: `${getRandomArbitrary(1,6)}` ,
       pic: 'cat9.jpg'
    },
    {
       name: "pepsy",
       age: `${getRandomArbitrary(1,6)}` ,
       pic: 'cat10.jpg'
    },
    {
       name: "johny",
       age: `${getRandomArbitrary(1,6)}` ,
       pic: 'cat11.jpg'
    },
    {
        name: "max",
        age: `${getRandomArbitrary(1,6)}` ,
        pic: 'cat12.jpg'
     }
]

let catList = [...cat_array_list];
let cats_container = document.querySelector('#cats-container');
const load_more_btn = document.querySelector('.btn-show-more');


// Modify the cat element, create the templete for all cats.
const setCats = function (cat_array) {

    console.log(cat_array)

    try {
        cats_container.innerHTML = ``;
        cat_array.forEach(cat => {
            console.log(cat)
            const cat_div = document.createElement('div');
            cat_div.classList.add('cat1');
            cat_div.classList.add('cat-grid');

            cat_div.innerHTML = `
                <img src="./img/${cat.pic}" alt="">
                <p class="cat-name">${cat.name}</p>
                <p class="cat-age">${cat.age} ${(cat.age < 2) ? "year" : "years"}  old</p>
            `
            cats_container.appendChild(cat_div);

        });

    } catch (error) {
        console.log("Error loading cats");
    }
}

setCats(catList.splice(0, 4));

// ======== Load More OnClick Listener ========
load_more_btn.addEventListener('click', event => {

    if (!catList.length) {
        console.log("Cat list is empty")
        console.log(cat_array_list)
        catList = [...cat_array_list];
    }

    setCats(catList.splice(0, 4));

    button.textContent = `Click count: ${event.detail}`;
  });


console.log("hello")
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "../../images/gyukotsu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "../../images/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "../../images/naruto.jpg", rating: 9, comment: "Yummy" },
    { id: 4, name: "Shio Ramen", restaurant: "Axels", image: "../../images/nirvana.jpg", rating: 6, comment: "Very Yummy"},
    { id: 5, name: "Kimchi Ramen", restaurant: "Neviss", image: "../../images/shoyu.jpg", rating: 8, comment: "Very Spicy"}
 ];


 function displayRamens() {
    // let ramen_menu = document.getElementById('ramen-menu')

    // ramens.forEach(function(ramen){
    //     let htm = `<img src="" alt="${ramen.name}">`

    //     ramen_menu.innerHTML += htm
    // })
    
    ramens.forEach(ramen => {
        let menu = document.getElementById('ramen-menu') 
        let img = document.createElement("img")
        img.src = ramen.image;
        img.alt = ramen.name; 
        
         img.addEventListener("click", () => handClick(ramen));

        menu.appendChild(img);
    });
 }
displayRamens()

function handClick(ramen) {
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = ramen.rating;
    document.getElementById("ramen-comment").textContent = ramen.comment;
}


function addSubmitListener() {
    const form = document.getElementById("ramen");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let  ramen= {
            name: document.getElementById("name"),
            restaurant: document.getElementById("restaurant"),
            image: document.getElementById("image"),
            rating: document.getElementById("rating"),
            comment: document.getElementById("comment")  
        };

        displayRamens();
        
    });
}


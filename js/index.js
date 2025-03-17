console.log("hello")
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "../../images/gyukotsu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "../../images/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "../../images/naruto.jpg", rating: 9, comment: "Yummy" },
    { id: 4, name: "Shio Ramen", restaurant: "Axels", image: "../../images/nirvana.jpg", rating: 6, comment: "Very Yummy"},
    { id: 5, name: "Kimchi Ramen", restaurant: "Neviss", image: "../../images/shoyu.jpg", rating: 8, comment: "Very Spicy"}
 ];

 let menu = document.getElementById('ramen-menu')

 function displayRamens() {
    ramens.forEach(ramen => {
        
        html = `<div>
        <img src = "${ramen.image}" alt = "${ramen.name}"> 
        <div id = "ramen-menu">
        <div id = "name"></div>
        </div>
        </div>`

        menu.innerHTML += html
    });
 }
displayRamens()

function handClick() {
    
}









//  function handClick() {
//     // console.log(ramen.name)
//    let ramen_details = document.getElementById('ramen-details')
//    let name = document.getElementById('name')
// //    name.innerText = ramen.name

// //    console.log(ramen_details)
// //    ramen_details.style.display = "none"
//  }




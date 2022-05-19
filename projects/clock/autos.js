const car1 = {
    brand: "Infiniti",
    model: "G-Serie",
    price: 13940.00,
    constructionYear: 2008,
    fuel: "benzine",
    img: "car.jfif",
    link: "https://www.marktplaats.nl/v/auto-s/infiniti/m1830790344-infiniti-g-37-awd-g35x-v6-awd-310pk-luxury-line",
};

const car2 = {
    brand: "BMW",
    model: "Serie 128ti",
    price: 49950.00,
    constructionYear: 2008,
    fuel: "benzine",
    img: "car.jfif",
    // link: "",
    spoiler: true,
    power: "266"
};
const car3 = {
    brand: "Mazda",
    model: "Serie 128ti",
    price: 49950.00,
    constructionYear: 2008,
    img: "car.jfif",
    fuel: "benzine",
    // link: "",
    spoiler: true,
    power: "266"
};


const cars = [car1, car2, car3,];


for(let i = 0; i < cars.length; i++){
    const car = cars[i];
    console.log(car.brand);
    console.log(car.price);
}

const carImg = document.querySelector(".car1");
carImg.src = "./img/" + cars[0].img;
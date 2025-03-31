import { Carousel } from "./lib.js";

Carousel({
    container: ".carousel-container",
    data: [
        {src: "https://cdn.pixabay.com/photo/2022/09/17/21/18/butterfly-7461850_1280.jpg"},
        {src: "https://cdn.pixabay.com/photo/2022/11/02/05/53/cycling-7564103_1280.jpg"},
        {src: "https://cdn.pixabay.com/photo/2023/01/28/10/14/girl-7750577_1280.jpg"}
    ],
    timeout: 3000,
    leftToRight: true
})
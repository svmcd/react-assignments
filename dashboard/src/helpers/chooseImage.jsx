import apple from "../img/apple.jpg"
import cherry from "../img/cherry.jpg"
import watermelon from "../img/watermelon.jpg"
import buildings from "../img/buildings.jpg"

function chooseImage(inputFromPopup){

    let toBeAddedImage;

    switch(inputFromPopup){
        case("watermelon"):
            toBeAddedImage = watermelon;
            break;
        case("cherry"):
            toBeAddedImage = cherry;
            break;
        case("apple"):
            toBeAddedImage = apple;
            break;
        case("buildings"):
            toBeAddedImage = buildings;
            break;
        default:
            toBeAddedImage = buildings;
            break;
    }

    return toBeAddedImage;

}

export default chooseImage;
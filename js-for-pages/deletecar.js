import {SERVER} from "../settings.js"

const URL = SERVER +"/cars"

export function deleteDeleteCar(){
    document.getElementById("btn-to-delete").onclick = deleteCar
}

function deleteCar() {
    console.log("called")
    const car = {}
    car.id = document.getElementById("input-delete")

    const options = {
        method: "DELETE"
    }
    fetch(URL, options)
        .then(res => res.json())
        .then(deletedCar=>deletedCar.remove())

}
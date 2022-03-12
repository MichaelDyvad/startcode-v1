
import {SERVER} from "../settings.js"

const URL = SERVER + "/cars"

let myCars = []

export function getAllCars(){
    if(myCars.length > 0) {
        makeRows(myCars)
        return
    }
    fetch(URL)
        .then(res=>res.json())
        .then(cars=>{
            makeRows(cars)
            myCars = cars
        })
        .catch(e=>console.error(e))
}

function makeRows(rows) {
    const trows = rows.map(car=>`
  <tr>
  <td>${car.id}</td>
  <td>${car.carBrand}</td>
  <td>${car.model}</td>
  <td>${car.pricePrDay}</td>
  </tr>
  `).join("\n")
    document.getElementById("car-rows").innerHTML = trows
}

import { renderTemplate, setActive, showPage } from "./utils.js"
import {getAllCars} from "./js-for-pages/seeourcars.js"
import {addAddCarHandles} from "./js-for-pages/addcar.js"
import {deleteDeleteCar} from "./js-for-pages/deletecar.js";

function renderMenuItems(evt) {
  const element = evt.target
  setActive(element)
  const id = element.id;
  renderTemplate(id)  //This setups the HTML for the page
  switch (id) {
    //Here you can execute JavaScript for the selected page
    case "page-see-cars": {
      getAllCars()
      break
    }
    case "page-add-cars": {
      addAddCarHandles()
      deleteDeleteCar()
      break
    }
    case "page-login": {
      setupLoginHandlers()
      break
    }
    case "page-logout": {
      logout()
      break
    }
  }
}

document.getElementById("menu").onclick = renderMenuItems;
showPage("page-about") //Set the default page to render





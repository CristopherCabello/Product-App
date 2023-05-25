class Product {
  constructor(name, price, year) {
    this._name = name;
    this._price = price;
    this._year = year;
  }
}

class UI {
  addProduct(product) {
    const productList = document.querySelector(".table-loader");
    const element = document.createElement("tbody");
    element.className = "element";
    element.innerHTML = `
        <tr class="table-active">
        <td id="col column-name">${product._name}</td>
        <td id="col column-price">${product._price}</td>
        <td id="col column-year">${product._year}</td>
        <td><a href="#" class="btn-danger" name="delete">Delete</a></td>
    `;
    productList.appendChild(element);
  }

  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if(element.name== 'delete'){
        element.parentElement.parentElement.parentElement.remove();
        this.showMessage('Product Deleted Successfully','danger')
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-dismissible  alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));
    //SHOWING DOM
    const container = document.querySelector(".container");
    const app = document.querySelector(".card-colm");
    container.insertBefore(div, app);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 2000);
  }
}

//DOMS
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const year = document.getElementById("year").value;

    const product = new Product(name, price, year);
    const ui = new UI();

    if (name === "" || price === "" || year === "") {
      return ui.showMessage("Complete los campos", "danger");
    }

    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage("Product added Successfully", "success");
    e.preventDefault();
  });

document
  .getElementById("product-list")
  .addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteProduct(e.target);
});

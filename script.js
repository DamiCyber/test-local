let myArray = JSON.parse(localStorage.getItem("bud")) || [];

const budget = () => {
  let namePro = item.value;
  let quan = quantity.value;
  let price = amount.value;

  let myObj = { namePro, quan, price };
  if (namePro == "" && quan == "" && price == "") {
    err.innerHTML = "i am not yet filled";
  } else {
    item.value = ""
    quantity.value =""
    amount.value=""
    myArray.push(myObj);
    window.location.href = "result.html";

    localStorage.setItem("bud", JSON.stringify(myArray));
  }
};

const display = () => {
  myArray.map((men, ind) => {
    show.innerHTML += `
    <h4>Product Name:${men.namePro}</h2>
    <h4>Product Quantity:${men.quan}</h2>
    <h4>Product Price:${men.price}</h2>
    <button onclick="dele(${ind})" class"h2">delete</button>
     `;
  });
};
const dele = (ind) =>{
    let check = confirm("Are you sure you want to delete this item")
    if(check == true){
      myArray.splice(ind, 1);
      localStorage.setItem("bud", JSON.stringify(myArray));
    }else{
        display();
    }
  
  }
display();


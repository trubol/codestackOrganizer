
import { Shirt } from "../classes/shirt.js";
import { Hat } from "../classes/hat.js";
import { Shoe } from "../classes/shoe.js";

let displayShirtsBtn = document.getElementById("displayShirtsBtn"),
  displayHatsBtn = document.getElementById("displayHatsBtn"),
  displayShoesBtn=document.getElementById("displayShoesBtn"),
  inventoryTable = document.getElementById("inventoryTable"),
  addAShirtBtn = document.getElementById("addAShirtBtn"),
  addAHatBtn = document.getElementById("addAHatBtn"),
  addAShoeBtn=document.getElementById("addAShoeBtn"),
  saveShirtBtn = document.getElementById("saveShirtBtn"),
  inputShirtType,
  inputShirtBrand,
  inputShirtColor,
  inputShirtLogo,
  inputShirtSize,
  inputShirtMaterial,
  inputShirtCondition,
  inputShirtButton,
  inputHatType,
  inputHatBrand,
  inputHatColor,
  inputHatLogo,
  inputHatSize,
  inputShoeType,
  inputShoeBrand,
  inputShoeColor,
  inputShoeLogo,
  inputShoeSize,
  inputShoeLaces,
  inputShoeCondition,
  inputShoeWearability,
  shirtItems,
  hatItems,
  shoeItems,
  shirtArray = [],
  saveShirtData=JSON.parse(localStorage.getItem("shirtInventory")),
  hatArray = [],
  saveHatData=JSON.parse(localStorage.getItem("hatInventory")),
  shoeArray=[],
  saveShoeData=JSON.parse(localStorage.getItem("shoeInventory"));

//Check local storage to see if any shirt data is saved
if (saveShirtData && saveShirtData != null) {
  shirtArray=saveShirtData;
} else {
//Push first item into the shirt Array
shirtArray.push(new Shirt("T-Shirt", "Kirkland", "Gray", "Beverage","XL","Cotton Blend","Worn","Yes"));
shirtArray.push(new Shirt("Long Sleeve", "Old Navy", "Gray", "Corin", "Medium", "Cotton", "Tight", "No"));
shirtArray.push(new Shirt("Tank Top","Jacob","Blue","Las Vegas","Large","Cotton","Good","No"));
shirtArray.push(new Shirt("John","North Face","Navy Green","The North Face","Medium","Cotton Blend","New","No"));
shirtArray.push(new Shirt("Jas","Shein","Green","CS Academy","Jas-Size","Wool","Good","Yes"));
shirtArray.push(new Shirt("Short-Sleeve","Garage","Grey","Evie","Small","Cotton","Summer","No"));
localStorage.setItem("shirtInventory", JSON.stringify(shirtArray));
};

//This uses the values from an Object and creates a new row of those values in a table
function addShirtRow(shirtObj) {
  let tr = document.createElement("tr");
  let th = document.createElement("th"),
    tdOne = document.createElement("td"),
    tdTwo = document.createElement("td"),
    tdThree = document.createElement("td"),
    tdFour=document.createElement("td"),
    tdFive=document.createElement("td"),
    tdSix=document.createElement("td"),
    tdSeven=document.createElement("td");

  th.setAttribute("scope", "row");
  th.textContent = shirtObj.stType;
  tdOne.textContent = shirtObj.stBrand;
  tdTwo.textContent = shirtObj.stColor;
  tdThree.textContent = shirtObj.stLogo;
  tdFour.textContent=shirtObj.stSize;
  tdFive.textContent=shirtObj.stMaterial;
  tdSix.textContent=shirtObj.stCondition;
  tdSeven.textContent=shirtObj.stButton;

  tr.appendChild(th);
  tr.appendChild(tdOne);
  tr.appendChild(tdTwo);
  tr.appendChild(tdThree);
  tr.appendChild(tdFour);
  tr.appendChild(tdFive);
  tr.appendChild(tdSix);
  tr.appendChild(tdSeven);

  return tr;
}

//This function will fetch the text from the URL and use it as the HTML for the inventoryTable section
function fetchShirts(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      inventoryTable.innerHTML = data;

      //This loops through each item in the shirtArray and adds them as row to the table
      shirtItems = document.getElementById("shirtItems");
      for (let i = 0; i < shirtArray.length; i++) {
        shirtItems.appendChild(addShirtRow(shirtArray[i]));
      }
    });
}

//----------------------------Shirts
displayShirtsBtn.addEventListener("click", function () {
  fetchShirts("./pages/shirt/shirtTable.html");
});

function addAShirt(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      shirtForm.innerHTML = data;
    });
}
addAShirtBtn.addEventListener("click", function () {
  addAShirt("./pages/shirt/shirtForm.html");
});

function saveAShirt() {
  (inputShirtType = document.getElementById("inputShirtType").value),
    (inputShirtBrand = document.getElementById("inputShirtBrand").value),
    (inputShirtColor = document.getElementById("inputShirtColor").value),
    (inputShirtLogo = document.getElementById("inputShirtLogo").value);
    (inputShirtSize = document.getElementById("inputShirtSize").value),
    (inputShirtMaterial = document.getElementById("inputShirtMaterial").value),
    (inputShirtCondition = document.getElementById("inputShirtCondition").value),
    (inputShirtButton = document.getElementById("inputShirtButton").value);
  shirtArray.push(
    new Shirt(inputShirtType, inputShirtBrand, inputShirtColor, inputShirtLogo,inputShirtSize,inputShirtMaterial,inputShirtCondition,inputShirtButton)
  );

  localStorage.setItem("shirtInventory", JSON.stringify(shirtArray)); //adds new shirt to local storage
  addShirtRow(shirtArray[shirtArray.length - 1]);
  refreshShirtTable(shirtArray);
}

function refreshShirtTable(arr) {
  shirtItems.innerHTML = "";
  for (let i = 0; i < shirtArray.length; i++) {
    shirtItems.appendChild(addShirtRow(shirtArray[i]));
  }
}

saveShirtBtn.addEventListener("click", function () {
  saveAShirt();
});


//---------------------------Hats

if (saveHatData && saveHatData != null) {
  hatArray=saveHatData;
} else {
hatArray.push(new Hat("Beanie", "Under Armour", "Black", "Beverage","Stretch-to-Fit"));
hatArray.push(new Hat("SnapBack","Nike","Blue","Corin","Medium"));
hatArray.push(new Hat("Straw","Stetson","Brown","Evie","Large"));

localStorage.setItem("hatInventory", JSON.stringify(hatArray));
};

function fetchHats(url) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        inventoryTable.innerHTML = data;
        hatItems = document.getElementById("hatItems");
        for (let i = 0; i < hatArray.length; i++) {
          hatItems.appendChild(addHatRow(hatArray[i]));
        }
      });

  }

  displayHatsBtn.addEventListener("click", function () {
    fetchHats("./pages/hat/hatTable.html");
  });

  function addHatRow(hatObj) {
    let tr = document.createElement("tr"),
    th = document.createElement("th"),
      tdOne = document.createElement("td"),
      tdTwo = document.createElement("td"),
      tdThree = document.createElement("td"),
      tdFour=document.createElement("td");
  
    th.setAttribute("scope", "row");
    th.textContent = hatObj.htType;
    tdOne.textContent = hatObj.htBrand;
    tdTwo.textContent = hatObj.htColor;
    tdThree.textContent = hatObj.htLogo;
    tdFour.textContent=hatObj.htSize;
  
    tr.appendChild(th);
    tr.appendChild(tdOne);
    tr.appendChild(tdTwo);
    tr.appendChild(tdThree);
    tr.appendChild(tdFour);
  
    return tr;
  }

function addAHat(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      hatForm.innerHTML = data;
    });
}

addAHatBtn.addEventListener("click", function () {
  addAHat("./pages/hat/hatForm.html");
});

function saveAHat() {
  (inputHatType = document.getElementById("inputHatType").value),
    (inputHatBrand = document.getElementById("inputHatBrand").value),
    (inputHatColor = document.getElementById("inputHatColor").value),
    (inputHatLogo = document.getElementById("inputHatLogo").value),
    (inputHatSize=document.getElementById("inputHatSize").value);
  hatArray.push(
    new Hat(inputHatType, inputHatBrand, inputHatColor, inputHatLogo,inputHatSize)
  );
  localStorage.setItem("hatInventory", JSON.stringify(hatArray));
  addHatRow(hatArray[hatArray.length - 1]);
  refreshHatTable(hatArray);
}

function refreshHatTable(arr) {
    hatItems.innerHTML = "";
    for (let i = 0; i < hatArray.length; i++) {
      hatItems.appendChild(addHatRow(hatArray[i]));
    }
  }

saveHatBtn.addEventListener("click", function () {
  saveAHat();
});

//---------------------------Shoes

if (saveShoeData && saveShoeData != null) {
  shoeArray=saveShoeData;
} else {
shoeArray.push(new Shoe("Sneakers", "Vans", "Red", "Company","9.5","No","Worn","Summer"));
shoeArray.push(new Shoe("Basketball","Jordan","Black","Air","10","Yes","Fresh","Sports"));
shoeArray.push(new Shoe("Boots","Doc Martens","Black","Jas","6.5","Yes","Comfortable","Kickin' It"));
shoeArray.push(new Shoe("Boots","Dr. Martens","Black","Evie","Womens 6","Leather","Great","Winter"))

localStorage.setItem("shoeInventory", JSON.stringify(shoeArray));
};

function fetchShoes(url) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        inventoryTable.innerHTML = data;
        shoeItems = document.getElementById("shoeItems");
        for (let i = 0; i < shoeArray.length; i++) {
          shoeItems.appendChild(addShoeRow(shoeArray[i]));
        }
      });

  }

  displayShoesBtn.addEventListener("click", function () {
    fetchShoes("./pages/shoe/shoeTable.html");
  });

  function addShoeRow(shoeObj) {
    let tr = document.createElement("tr"),
    th = document.createElement("th"),
      tdOne = document.createElement("td"),
      tdTwo = document.createElement("td"),
      tdThree = document.createElement("td"),
      tdFour = document.createElement("td"),
      tdFive = document.createElement("td"),
      tdSix = document.createElement("td"),
      tdSeven = document.createElement("td");
  
    th.setAttribute("scope", "row");
    th.textContent = shoeObj.seType;
    tdOne.textContent = shoeObj.seBrand;
    tdTwo.textContent = shoeObj.seColor;
    tdThree.textContent = shoeObj.seLogo;
    tdFour.textContent = shoeObj.seSize;
    tdFive.textContent = shoeObj.seLaces;
    tdSix.textContent = shoeObj.seCondition;
    tdSeven.textContent=shoeObj.seWearability;
  
    tr.appendChild(th);
    tr.appendChild(tdOne);
    tr.appendChild(tdTwo);
    tr.appendChild(tdThree);
    tr.appendChild(tdFour);
    tr.appendChild(tdFive);
    tr.appendChild(tdSix);
    tr.appendChild(tdSeven);
  
    return tr;
  }

function addAShoe(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      shoeForm.innerHTML = data;
    });
}

addAShoeBtn.addEventListener("click", function () {
  addAShoe("./pages/shoe/shoeForm.html");
});

function saveAShoe() {
  (inputShoeType = document.getElementById("inputShoeType").value),
    (inputShoeBrand = document.getElementById("inputShoeBrand").value),
    (inputShoeColor = document.getElementById("inputShoeColor").value),
    (inputShoeLogo = document.getElementById("inputShoeLogo").value);
    (inputShoeSize = document.getElementById("inputShoeSize").value),
    (inputShoeLaces = document.getElementById("inputShoeLaces").value),
    (inputShoeCondition = document.getElementById("inputShoeCondition").value),
    (inputShoeWearability = document.getElementById("inputShoeWearability").value);
  shoeArray.push(
    new Shoe(inputShoeType, inputShoeBrand, inputShoeColor, inputShoeLogo,inputShoeSize,inputShoeLaces,inputShoeCondition,inputShoeWearability)
  );
  localStorage.setItem("shoeInventory", JSON.stringify(shoeArray)); 
  addShoeRow(shoeArray[shoeArray.length - 1]);
  refreshShoeTable(shoeArray);
}

function refreshShoeTable(arr) {
    shoeItems.innerHTML = "";
    for (let i = 0; i < shoeArray.length; i++) {
      shoeItems.appendChild(addShoeRow(shoeArray[i]));
    }
  }

saveShoeBtn.addEventListener("click", function () {
  saveAShoe();
});
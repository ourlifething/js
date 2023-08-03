"use strict";//厳格モード
document.addEventListener("DOMContentLoaded",()=>{
  console.log("デバッグ:in");

  class Fruits{
    constructor(name,price){
      this.name = name;
      this.price = price;
    }
    showInfo(){
      return `${this.name}: ${this.price}円`;
      //return `<p>${this.name}:&nbsp${this.price}円</p>`
      //li.innerHTML=fruits.showInfo();
    }
  }
  const fruitsList=[];//からのリスト
  //DOMの取得
  const name = document.getElementById("name");
  const price = document.getElementById("price");
  const bt = document.getElementById("bt");
  const ol = document.getElementById("list");

  bt.addEventListener("click",()=>{
    const fruitsName = name.value;
    const fruitsPrice = parseInt(price.value);
    fruitsList.push(new Fruits(fruitsName,fruitsPrice));//push:リストに追加
    sortFruits();
    ol.textContent = null;//一度空にしてから
    for(let fruit of fruitsList){
      const li = document.createElement("li");
      li.textContent = fruit.showInfo();
      if(fruit.price >= 1000){
        li.classList.add("red");//removeで外す
      }
      ol.append(li);
    }
    name.value = "";
    price.value = "";
    name.focus();
  });
  const sortFruits=()=>{
    for(let i=0; i<fruitsList.length-1; i++){//降順
      for(let j=i+1; j<fruitsList.length; j++){
        if(fruitsList[i].price < fruitsList[j].price){
          const temp = fruitsList[i];
          fruitsList[i] = fruitsList[j];
          fruitsList[j] = temp;
        }
      };
    }
  };
});
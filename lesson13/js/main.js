window.onload=()=>{
  const prices = [120,50,180];
  const result = document.getElementById("result");
  const fruits = document.getElementsByClassName("fruits");
  
  for(let i =0; i<fruits.length; i++){
    fruits[i].addEventListener("change",()=>{
      let sum=0;
      for(let i=0;i<fruits.length;i++){
        sum += fruits[i].value * prices[i];
      } 
      result.textContent=sum+"円です！";
    });
  }
};
/*
javaは変数の有効範囲内に同じ変数を宣言できないjsはできる
for(let i=0;i<3;i++){
  for(let j=0;j<3;j++){
    console.log(i)
  }
}
*/
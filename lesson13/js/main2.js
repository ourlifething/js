window.onload = ()=>{
  const result = document.getElementById("result");
  const fruits = document.querySelectorAll("[data-price]");
  //[data-price]というセレクタは、data-price属性を持つすべての要素を選択 NodeListとして取得
  //NodeListを取得はinput要素<input type="number" data-price="120" class="fruits" value="0" min="0">全てを取得できる
  //＜例＞fruits[0].value
  for( let fruit of fruits){
    fruit.addEventListener("change",()=>{
      /*for文の値が変わった時にイベントを走らせる */
      let sum=0;
      for(let fruit of fruits){
        sum += parseInt(fruit.value) * parseInt(fruit.getAttribute("data-price"));
      }
      result.textContent = sum + "円です！";
    });
  }
};
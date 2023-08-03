window.onload=()=>{
  const path="images/";
  const images=["chichi.jpg","gugu.jpg","guguchichi.jpg"];
  let index=0;
  const ele=document.getElementById("mainImage");
  ele.addEventListener("click",()=>{
    ele.src=path+images[++index % images.length];
  });
};
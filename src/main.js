let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/*你好,我叫干架
接下来我展示一下前端功底
首先要准备的是一个div*/
#div1{
    border:1px solid red;
    width:200px ;
    height:200px;
}
/*接下来需要把div变成一个八卦图，
首先需要将div变成一个圆*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,1);
    border:none;
}
/*八卦是阴阳结合的
一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(9,9,121,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个球*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:black;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:white;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
    `;
let string2 = "";
// string = string.replace(/\n/g, "<br>"); //正则，使得所有变成换行
let n = 0;
let step = () => {
  setTimeout(() => {
    // string2 += string[n] == "\n" ? "" : string[n];/有问题 空格也会被注释掉

    //如果不是回车就照搬

    if (string[n] == "\n") {
      string2 += "<br>";
    } else if (string[n] == " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 999999);
    html.scrollTo(0, 999999);
    if (n + 1 < string.length) {
      //n不是最后一个
      n = n + 1;
      step();
    } else {
      //n是最后一个
    }
  }, 50);
};
step(); //1变成2
// let style = document.querySelector("#style");

// setTimeout(() => {
//   style.innerHTML = `
// body{
//     color:red;
// }
// `;
// }, 3000);

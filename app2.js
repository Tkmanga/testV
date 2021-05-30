let x = 0;
function init() {
  for (let index = 5; index < 20; index++) {
    x = index;
  }
  console.log(1 === 1); //yes
  console.log(1 === "1"); //false
  console.log("1" == 1); //yes
  console.log(0 == false); //yes
  console.log(5 !== "5"); //falso
}
init();

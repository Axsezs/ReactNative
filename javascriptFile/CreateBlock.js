let a = 1;
console.log("Top Level");
console.log("a = " + a);

//Create new block
{
  let b = 2;
  console.log("Inside Block");
  console.log("a = " + a);
  console.log("b = " + b);
}

var nilai = 5956560159466056;
var pisah = nilai
  .toString()
  .split("0")
  .map((element) => {
    return element.split("").sort().join("");
  })
  .join("");

console.log(pisah);

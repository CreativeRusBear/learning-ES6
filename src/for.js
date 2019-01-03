const browsers = ["Chrome", "Edge", "Safari", "Opera", "Firefox"];
console.log("for ... in");
for (let index in browsers){
    console.log(browsers[index]);
}
console.log(browsers);

console.log("for ... of");
for (let browser of browsers){
    console.log(browser);
}
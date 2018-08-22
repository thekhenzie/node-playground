var nums = process.argv.slice(2);
var sum = 0;
for (x of nums) {
    sum += +x;
}
console.log(sum);
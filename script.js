function mincost(arr)
{ 
//write your code here
// return the min cost
 let cost = 0;
while (arr.length > 1) {
    let temp = arr[0] + arr[1];
    cost += temp;
    arr.splice(0, 2);
    arr.push(temp);
    arr.sort((a, b) => a - b);
}
	
}

module.exports=mincost;

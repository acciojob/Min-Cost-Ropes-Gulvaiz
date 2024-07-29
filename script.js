function mincost(arr)
{ 
//write your code here
// return the min cost
   return arr.sort((a,b) => a - b)
	
}

module.exports=mincost;

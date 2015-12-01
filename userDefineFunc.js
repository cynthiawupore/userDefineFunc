var scareMe = function(){
	console.log("cynthia")
	scareMe = function(){
		console.log("wuqian")
	}
}

scareMe() //cynthia
scareMe() //wuqian


// 添加一个新属性newPro
scareMe.newPro = "addProperty"
console.log(scareMe.newPro) //addProperty


// 把函数对象scareMe分配给一个新的变量prank
var prank = scareMe ;
console.log(prank.newPro) //addProperty
prank() //wuqian
prank() //wuqian


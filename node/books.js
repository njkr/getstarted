/* exports.name = 'Node.js by example';
exports.read = function() {
console.log('I am reading ' + exports.name);
} */


module.exports=function(){
	var ratepoint=0;
	return{
		rate:function(points){
			ratepoint = points;
		},
		getpoints:function(){
			return ratepoint;
		}
	}
}
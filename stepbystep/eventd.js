var util = require("util");
var EventEmitter = require("events").EventEmitter;

var Project = function(){

}

util.inherits(Project, EventEmitter);

Project.prototype.open = function(){
	this.emit("custom:event","args 1","args 2");
};

var project = new Project();
project.on("custom:event",function(str1,str2){
	console.log("got: %s and %s",str1,str2);
});

project.open();

process.nextTick(function nextTick1(){
	var a=0;
	while(true){
		a++;
	}
});

process.nextTick(function nextTick2(){
	console.log("next tick");
});

setTimeout(function timeout(){
	console.log("timeout");
},1000);

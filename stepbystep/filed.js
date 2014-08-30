var path = require("path");
var pout = path.normalize("/foo/bar//baz/asdf/quux/..");
console.log(path);
console.log(pout);

pout = path.normalize("/foo/bar//baz/asdf/quux/");
console.log(pout);

pout = path.resolve('/foo/bar','./baz');
console.log(pout);

pout = path.resolve('/foo/bar','/tmp/file');
console.log(pout);

pout = path.resolve('www','static/png/','../gif/image.gif');
console.log(pout);

pout = path.join('/foo','bar','baz/asf/','quux','..');
console.log(pout);
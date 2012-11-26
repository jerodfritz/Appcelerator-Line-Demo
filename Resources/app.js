var win = Ti.UI.createWindow();
var container = Ti.UI.createView({width:220,height:220});
win.add(container);
win.open();

var Line = require('line');

var l = Line.createLine({ x1:10, y1:10, x2:10, y2:200, color:'red', width:5})
var r = Line.createLine({ x1:200, y1:10, x2:200, y2:200, color:'blue', width:5})
var b = Line.createLine({ x1:10, y1:200, x2:200, y2:200, color:'green', width:5})
var t = Line.createLine({ x1:10, y1:10, x2:200, y2:10, color:'purple', width:5})
container.add(l);
container.add(r);
container.add(b);
container.add(t);

var changed = false;
var button = Ti.UI.createButton({title:'Update'});
button.addEventListener('click',function(){
  if(changed){
    l.update({x1:10, y1:10, x2:10, y2:200,duration:2000})
    r.update({x1:200, y1:10, x2:200, y2:200,duration:2000})
    b.update({x1:10, y1:200, x2:200, y2:200,duration:2000})
    t.update({x1:10, y1:10, x2:200, y2:100,duration:2000})
  } else {
    l.update({x1:10, y1:10, x2:200, y2:10,duration:2000})
    r.update({x1:10, y1:200, x2:200, y2:200,duration:2000})
    b.update({x1:200, y1:10, x2:200, y2:200,duration:2000})
    t.update({x1:10, y1:10, x2:10, y2:200,duration:2000})
  }
  changed = !changed;
})
win.add(button);


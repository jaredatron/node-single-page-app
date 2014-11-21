;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app, model, router;

model = require('./model.coffee');

router = require('./router.coffee');

app = {
  model: model,
  router: router
};

module.exports = app;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2RlYWRseWljb24vd29yay9ub2RlLXNpbmdsZS1wYWdlLWFwcC9hcHAvaW5kZXguY29mZmVlIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2RlYWRseWljb24vd29yay9ub2RlLXNpbmdsZS1wYWdlLWFwcC9hcHAvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsa0JBQUE7O0FBQUEsS0FBQSxHQUFTLE9BQUEsQ0FBUSxnQkFBUixDQUFULENBQUE7O0FBQUEsTUFDQSxHQUFTLE9BQUEsQ0FBUSxpQkFBUixDQURULENBQUE7O0FBQUEsR0FHQSxHQUFNO0FBQUEsRUFDSixLQUFBLEVBQVEsS0FESjtBQUFBLEVBRUosTUFBQSxFQUFRLE1BRko7Q0FITixDQUFBOztBQUFBLE1BUU0sQ0FBQyxPQUFQLEdBQWlCLEdBUmpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJtb2RlbCAgPSByZXF1aXJlICcuL21vZGVsLmNvZmZlZSdcbnJvdXRlciA9IHJlcXVpcmUgJy4vcm91dGVyLmNvZmZlZSdcblxuYXBwID0ge1xuICBtb2RlbDogIG1vZGVsLFxuICByb3V0ZXI6IHJvdXRlcixcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcHBcbiJdfQ==

},{"./model.coffee":2,"./router.coffee":3}],2:[function(require,module,exports){


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2RlYWRseWljb24vd29yay9ub2RlLXNpbmdsZS1wYWdlLWFwcC9hcHAvbW9kZWwuY29mZmVlIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2RlYWRseWljb24vd29yay9ub2RlLXNpbmdsZS1wYWdlLWFwcC9hcHAvbW9kZWwuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFvQiIsInNvdXJjZXNDb250ZW50IjpbIiJdfQ==

},{}],3:[function(require,module,exports){


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2RlYWRseWljb24vd29yay9ub2RlLXNpbmdsZS1wYWdlLWFwcC9hcHAvcm91dGVyLmNvZmZlZSIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWFkbHlpY29uL3dvcmsvbm9kZS1zaW5nbGUtcGFnZS1hcHAvYXBwL3JvdXRlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUW9CIiwic291cmNlc0NvbnRlbnQiOlsiIl19

},{}]},{},[1])
;
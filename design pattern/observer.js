function Click() {
  this.observers = [];
}

Click.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },

  unsubscribe: function (fn) {
    this.observers = this.observers.filter(function (item) {
      return item !== fn;
    });
  },

  fire: function (o) {
    var scope = this;
    this.observers.forEach(function (item) {
      item.call(scope, o);
    });
  },
};

function run() {
  let clickHandler = function (item) {
    console.log("fired: " + item);
  };

  let click = new Click(); // Menggunakan 'new' untuk membuat instance dari Click

  click.subscribe(clickHandler);
  click.fire("event 1");
  click.unsubscribe(clickHandler);
  click.fire("event 2");
  click.subscribe(clickHandler);
  click.fire("event 3");
}

run();

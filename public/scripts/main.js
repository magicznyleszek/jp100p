(function() {
  var knowYourDinosaurs, projectInterface;

  projectInterface = function() {
    var doSomething, init;
    init = function() {
      return doSomething();
    };
    doSomething = function() {
      if (true === true) {
        return console.log('Hello world!');
      }
    };
    return this.init = init;
  };

  knowYourDinosaurs = new projectInterface();

  knowYourDinosaurs.run();

}).call(this);

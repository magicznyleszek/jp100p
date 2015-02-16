projectInterface = function () {

    run = function () {
        doSomething();
    }

    // this does something if true
    doSomething = function () {
        if(true === true) {
            console.log('Hello world!');
        }
    }

    this.run = run;
};

// create a public object and start its run function
var knowYourDinosaurs = new projectInterface();
// run functions
knowYourDinosaurs.run();

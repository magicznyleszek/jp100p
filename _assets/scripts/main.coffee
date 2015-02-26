projectInterface = ->

    init = ->
        doSomething()

    # this does something if true
    doSomething = ->
        if true is true
            console.log('Hello world!')

    this.init = init

# create a public object and start its run function
knowYourDinosaurs = new projectInterface()
knowYourDinosaurs.run()

function StopWatch() {
    let _duration = 0;
    let bool = false;
    let intervalId;

    
    Object.defineProperty(this, 'duration', {
       get: function() {
        console.log(_duration);
       }    
     })


     this.start = function() {
        if(bool) {
            throw new Error('The clock already started');
        }
        bool = true;
        intervalId = setInterval(function() {
        if(bool){
            _duration +=1;
            console.log(_duration);
        } else {
            clearInterval(intervalId);
        }
       }, 1000)
     } 


    this.stop = function() {
        if(!bool) {
            throw new Error('The clock already pause')
        }
        bool = false;
     }


    this.reset = function() {
        bool = false;
        _duration = 0;
        clearInterval(intervalId);
        this.start();
    }
}


   
// const sw = new StopWatch()

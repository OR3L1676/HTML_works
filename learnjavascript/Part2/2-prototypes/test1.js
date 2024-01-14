function StopWatch() {
    let _duration = 0;
    let bool = false;
    let intervalId;

    
    Object.defineProperty(this, 'duration', {
       get: function() {
        return _duration;
       }    
     })

    Object.defineProperty(this, 'bool', {
       get: function() {
        return bool;
       }    
     })
    Object.defineProperty(this, 'intervalId', {
       get: function() {
        return intervalId;
       }    
     })

    //  this.start = function() {
    //     if(bool) {
    //         throw new Error('The clock already started');
    //     }
    //     bool = true;
    //     intervalId = setInterval(function() {
    //     if(bool){
    //         _duration +=1;
    //         console.log(_duration);
    //     } else {
    //         clearInterval(intervalId);
    //     }
    //    }, 1000)
    //  } 


    // this.stop1 = function() {
    //     if(!bool) {
    //         throw new Error('The clock already pause')
    //     }
    //     bool = false;
    //  }


    // this.reset = function() {
    //     bool = false;
    //     _duration = 0;
    //     clearInterval(intervalId);
    //     this.start();
    // }
}

StopWatch.prototype.stop = function() {
    if(!this.bool) {
            throw new Error('The clock already pause')
        }
        this.bool = false;
}

StopWatch.prototype.start = function() {
    if(this.bool) {
        throw new Error('The clock already started');
    }
    this.bool = true;
    this.intervalId = setInterval(function() {
    if(this.bool){
        this.duration +=1;
        console.log(this.duration);
    } else {
        clearInterval(this.intervalId);
    }
   }, 1000)
}

StopWatch.prototype.reset = function() {
    this.bool = false;
    this.duration = 0;
    clearInterval(intervalId);
    this.start();
}
   
const sw = new StopWatch()




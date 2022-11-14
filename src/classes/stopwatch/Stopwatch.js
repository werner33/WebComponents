export class Stopwatch {

    constructor(){
      this.startTime = null;
      this.stopTime = null;
    }
  
    start () {
      if(!this.startTime){
        this.startTime = Date.now();
      } else {
        this.startTime = Date.now() - this.getElapsedTime();
        this.stopTime = null;
      }
    }
  
    stop () {
      if(!this.startTime){
        this.stopTime = null;
      } else {
        this.stopTime = Date.now();
      }
    }

    getElapsedTime () {
      if(!this.stopTime && !this.startTime){
        return 0;
      } else if(this.stopTime){
        return this.stopTime - this.startTime;
      } else {
        return Date.now() - this.startTime;
      }
    }
  
    reset () {
      if(this.startTime && this.stopTime){
        this.startTime = null;
        this.stopTime = null;
      } else {
        this.stop();
      }
    
    }
  
  }
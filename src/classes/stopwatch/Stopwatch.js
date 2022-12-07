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
      } else if (!this.stopTime) {
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

    getFormattedTime () { 
      let elapsedTime = this.getElapsedTime();
      let hours = Math.floor(elapsedTime / 3600000).toString().padStart(2, '0');
      elapsedTime = elapsedTime % 3600000;
      let minutes = Math.floor(elapsedTime / 60000).toString().padStart(2, '0');
      elapsedTime = elapsedTime % 60000;
      let seconds = Math.floor(elapsedTime / 1000).toString().padStart(2, '0');
      elapsedTime = elapsedTime % 1000;
      let milliseconds = Math.floor(elapsedTime / 100).toString();
      return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }
  
  }
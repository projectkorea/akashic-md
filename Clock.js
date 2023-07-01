class Clock {
  constructor({template}){
    this.template = template
    this.date = 0
  }

  update() {
    const date = new Date()
    function makeTwoDigits(i) { return i < 10 ? '0' + i : i; }
    this.date = this.template
      .replace('hh', makeTwoDigits(date.getHours()))
      .replace('mm', makeTwoDigits(date.getMinutes()))
      .replace('ss', makeTwoDigits(date.getSeconds()))
    this.log()
  }
  
  log() {
    console.log(this.date);
  }

  start() {
    this.update()
    setInterval(()=>this.update(),1000)
  }

  end() {
    clearInterval(this.interval)
  }
}

const clock = new Clock({template:'hh:mm:ss'});
clock.start();
class Timer {
    constructor (value) {
        this.value = value;
        this.running = false;
        // this.timer;
    }
    plus() {
        if (!this.running) {
          this.value += 5;
          this.update();
        }
    }

    minus() {
        if (!this.running) {
          this.value -= (this.value > 0) ? 5 : 0;
          this.update();
        }
    }
    
    decrement() {
        if (this.value > 1) {
            this.value--;
            this.update();
        } else if (this.value === 1 && this.running) {
            this.element.querySelector('.btn-run').textContent = 'start';
            this.value = 0;
            this.update();
            this.running = false;
            clearInterval(this.timer);
            this.element.querySelector('.btn-run').textContent = 'start';
            window.setTimeout(()=>{alert('CRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR')}, 10)
            
        }
    }
    
    reset() {
        this.running = false;
        clearInterval(this.timer);
        this.value = 10;
        this.update();
        this.element.querySelector('.btn-run').textContent = 'start';
    }

    run() {
        if (this.value !== 0) {
            const runBtn = this.element.querySelector('.btn-run');
            if (this.running) {
                this.running = false;
                runBtn.textContent = 'start';
                clearInterval(this.timer);
            } else {
                this.running = true;
                runBtn.textContent = 'stop';
                this.timer = setInterval(() => {
                    this.decrement();
                }, 1000);

            }
        }
    }

    render() {
        this.element = document.createElement('div');
        this.element.className = 'timer-main';
        this.element.innerHTML = (
          `<div id="reset" class="btn-reset">reset</div>
          <div class="timer">
              <div class="btn-up">+</div>
              <div id="value" class="value">0</div>
              <div class="btn-down">-</div>
          </div>
          <div class="btn-run">start</div>`
        );
    
        const upBtn = this.element.querySelector('.btn-up');
        upBtn.addEventListener('click', () => {
          this.plus();
        });
    
        const downBtn = this.element.querySelector('.btn-down');
        downBtn.addEventListener('click', () => {
          this.minus();
        });

        const resetBtn = this.element.querySelector('.btn-reset');
        resetBtn.addEventListener('click', () => {
          this.reset();
        });

        const runBtn = this.element.querySelector('.btn-run');
        runBtn.addEventListener('click', () => {
          this.run();
        });
    
        this.update();
      }
    
      mount(parent) {
        this.render();
        parent.appendChild(this.element);
      }
    
      update() {
        const value = this.element.querySelector('#value');
        let value_str = '';
        // if (this.value >= 60) {
          value_str += Math.floor(this.value / 60) + ' : ';
        // }
        if (('' + (this.value % 60)).length < 2) {
          value_str += '0';
        }
        value_str += (this.value % 60);
        value.textContent = `${value_str}`;
      }
    }
    
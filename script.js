class Calculator {
    constructor(del,numb,oper,expres,rsl,equal) {
        this.delete = document.getElementById(del);
        this.number = document.getElementsByClassName(numb);
        this.operator = document.getElementsByClassName(oper);
        this.expression = document.getElementById(expres);
        this.result = document.getElementById(rsl);
        this.equal = document.getElementById(equal);
        this.FirstNumber = "0";
        this.SecondNumber = "0";
        this.checkOper = "";
        this.ShowCal();
    }
    DelCal() {
        this.delete.addEventListener("click", (event)=>{
            this.result.innerHTML = "";
            this.expression.innerHTML = "";
            this.FirstNumber = "0";
            this.SecondNumber ="0";
            this.checkOper ="";
        });
    }
    Handling() {
        this.FirstNumber = parseFloat(this.FirstNumber);
        this.SecondNumber = parseFloat(this.SecondNumber);
        switch(this.checkOper) {
            case "+": {
                return this.FirstNumber + this.SecondNumber;
            }
            case "-": {
                return this.FirstNumber - this.SecondNumber;
            }
            case "*": {
                return this.FirstNumber * this.SecondNumber;
            }
            case "/": {
                return this.FirstNumber / this.SecondNumber;
            }
            default: 
            return "Fail";
        }
    }
    ShowEqual() {
        this.equal.addEventListener("click", ()=>{       
            this.result.innerHTML = this.Handling();
        })
    }
    ShowCal() {
        document.addEventListener("click", (event)=>{
            if((event.target != this.delete) 
            && (event.target != this.equal)
            && (Object.values(this.number).indexOf(event.target) > -1)            
            || (Object.values(this.operator).indexOf(event.target) > -1)) {
                this.DelCal();
                this.ShowEqual();
                this.expression.innerHTML += event.target.innerText;
                if((Object.values(this.number).indexOf(event.target) > -1) && (this.checkOper == "")) {   
                    this.FirstNumber +=event.target.innerText;
                } else if((Object.values(this.operator).indexOf(event.target) > -1) && (this.checkOper =="")) {
                    this.checkOper = event.target.innerText;
                } else
                {
                    this.SecondNumber +=event.target.innerText;
                }
            } 
        })
    }   
}
var Cal = new Calculator('delete','number','operator','expression','result','equal');

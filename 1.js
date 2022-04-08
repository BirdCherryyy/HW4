function NumberIsObject(number){
    if (number >= 0 && number <1000){
    this.hundreds = Math.floor(number/100)
    this.tens = Math.floor((number-this.hundreds*100)/10)
    this.units = Math.floor(number-(this.hundreds*100+this.tens*10))
}else{
    
}
}

console.log(new NumberIsObject(90))
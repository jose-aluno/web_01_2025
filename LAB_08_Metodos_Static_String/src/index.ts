class Calculadora {
    PI: number = 3.14159;
    
   somar(a: any, b: any): any {
        return a + b;
    }
    
    subtrair(a: number, b: number): number {
        return a - b;
    }
}

const calc = new Calculadora()

console.log(calc.somar(2,2))
console.log(calc.somar('IF','SP'))
console.log(calc.somar(new Date(),new Date()))
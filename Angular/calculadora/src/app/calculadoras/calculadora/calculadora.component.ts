import { Component } from '@angular/core';

@Component({
    selector:'app-calculadora',
    templateUrl:'./calculadora.component.html'
})
export class CalculadoraComponent{
    public numero1:number=0;
    public numero2:number=0;
    public ans:number = 0;
    public exp:string = '';
    public total:number=0;
    public opc:string = '';
    
    pushButton(valor:string):void
    {
        this.exp += valor;
    }
    sumar():number
    {
        this.opc = '+';
        this.total += Number(this.exp);
        this.limpiar();
        return this.total;
    }
    restar():number
    {
        this.opc = '-';
        this.total = Number(this.exp);
        this.limpiar();
        return this.total;
    }
    dividir():number
    {
        this.opc = '/';
        this.total = Number(this.exp);
        this.limpiar();
        return this.total;
    }
    multiplicar():number
    {
        this.opc = '*';
        this.total = Number(this.exp);
        this.limpiar();
        return this.total;
    }
    limpiar():void{
        this.exp = '';
    }
    getTotal( operador:string ):void
    {
        
        switch(operador)
        {
            case "+":
                this.total = this.sumar();
                break;
            case "-":
                this.total = this.restar();
                break;
            case "*":
                this.total = this.multiplicar();
                break;
            case "/":
                this.total = this.dividir();
                break;
            case "=":
                this.antesOpc();
                break;
        }
        
    }
    antesOpc():void
    {
        switch(this.opc)
        {
            case "+":
                this.total += Number(this.exp);
                this.exp = this.total.toString();
                console.log(this.total);
                break;
            case "-":
                this.total -= Number(this.exp);
                this.exp = this.total.toString();
                console.log(this.total);
                break;
            case "*":
                this.total *= Number(this.exp);
                this.exp = this.total.toString();
                console.log(this.total);
                break;
            case "/":
                this.total /= Number(this.exp);
                this.exp = this.total.toString();
                console.log(this.total);
                break;
            case "=":
                this.exp = this.total.toString();
                break;
        }
    }
}
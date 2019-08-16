import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<p>Имя пользователя: {{userName}}</p>
                <p>Возраст пользователя: {{userAge}}</p>
                <button (click)="change(true)">+</button>
               <button (click)="change(false)">-</button>
               <input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />
               <p>{{counter}}</p>
               `,
    styles: [`h2, p {color:navy;}`]
})
export class ChildComponent {
    @Input() userName: string;
    _userAge: number;

    @Input()
    set userAge(age: number) {
        if (age < 0) {
            this._userAge = 0;
        } else if (age > 100) {
            this._userAge = 100;
        } else {
            this._userAge = age;
        }
    }
    get userAge() {
        return this._userAge;
    }

    @Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: string){
         
        this.userName = model;
        this.userNameChange.emit(model);
    }

    @Output() onChanged = new EventEmitter<boolean>();
    change(increased:any) {
        this.onChanged.emit(increased);
    }

    counter: number = 0;
    increment() { this.counter++; }
    decrement() { this.counter--; }
}

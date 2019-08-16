import { Component, ViewChild } from '@angular/core';
import { ChildComponent} from './child.component';

class Item {
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number) {

        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    name: string = "Tom";
    age: number = 24;
    red = "isredbox";
    items: Item[] =
        [
            { purchase: "Хлеб", done: false, price: 15.9 },
            { purchase: "Масло", done: false, price: 60 },
            { purchase: "Картофель", done: true, price: 22.6 },
            { purchase: "Сыр", done: false, price: 310 }
        ];
    addItem(text: string, price: number): void {

        if (text == null || text.trim() == "" || price == null)
            return;
        this.items.push(new Item(text, price));
    }

    clicks: number = 0;
    onChanged(increased: any) {
        increased == true ? this.clicks++ : this.clicks--;
    }

    @ViewChild(ChildComponent, {static: false})
    private counterComponent: ChildComponent;
     
    increment() { this.counterComponent.increment(); }
    decrement() { this.counterComponent.decrement(); }
}
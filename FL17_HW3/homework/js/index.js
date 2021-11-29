'use strict';


/**
 * Class
 * @constructor
 * @param size - size of pizza
 * @param type - type of pizza
 * @throws {pizzaException} - in case of improper use
 */
//function Pizza(size, type) { ... }

/* Sizes, types and extra ingredients */
//Pizza.SIZE_S = ...
//Pizza.SIZE_M = ...
//Pizza.SIZE_L = ...

//Pizza.TYPE_VEGGIE = ...
//Pizza.TYPE_MARGHERITA = ...
//Pizza.TYPE_PEPPERONI = ...

//Pizza.EXTRA_TOMATOES = ...
//Pizza.EXTRA_CHEESE = ...
//Pizza.EXTRA_MEAT = ...

/* Allowed properties */
//Pizza.allowedSizes = ...
//Pizza.allowedTypes = ...
//Pizza.allowedExtraIngredients = ...

/**
 * Provides information about an error while working with a pizza.
 * details are stored in the log property.
 * @constructor
 */


function pizzaException(log) {
    throw log;
}

const EXTRAS = {
    EXTRA_TOMATOES : 5,
    EXTRA_CHEESE : 7,
    EXTRA_MEAT : 9
};

const TYPES = {
    TYPE_VEGGIE : 50,
    TYPE_MARGHERITA : 60,
    TYPE_PEPPERONI : 70
};

const SIZES = {
    SIZE_S : 50,
    SIZE_M : 75,
    SIZE_L : 100
};

class Pizza {

    constructor (size, type) {
        this.extra = [];
        this.setSize(size);
        this.setType(type);
    }

    setSize(size) {
        const allowedSizes = [SIZES.SIZE_S, SIZES.SIZE_M, SIZES.SIZE_L];
        
        if (allowedSizes.includes(size)) {
            this.size = size; 
            
} else {
            pizzaException('Wrong Size'); 
}
    }

    setType(type) {
        const allowedTypes = [TYPES.TYPE_VEGGIE, TYPES.TYPE_MARGHERITA, TYPES.TYPE_PEPPERONI];
        
        if (allowedTypes.includes(type)) {
            this.type = type;
        } else {
            pizzaException('Wrong Type');
        }
    }

    addExtraIngredient(extra) {
        const allowedExtra = [EXTRAS.EXTRA_TOMATOES, EXTRAS.EXTRA_CHEESE, EXTRAS.EXTRA_MEAT];

        if (this.extra.includes(extra)) {
            pizzaException('Duplicate ingredients');
            return;
        }

        if (allowedExtra.includes(extra)) {
            this.extra.push(extra);
        } else {
            pizzaException('Wrong Ingredient');
        }
    }

    checkPrice() {
        let price = this.size + this.type;

        this.extra.forEach(element => {
            price += element;
        })

        return price;
    }

    getPizzaInfo() {
        let size, type;

        let extra = [];

        switch (this.size) {
            case SIZES.SIZE_S: size = 'SMALL'; break;
            case SIZES.SIZE_M: size = 'MEDIUM'; break;
            case SIZES.SIZE_L: size = 'LARGE'; break;
            default: break;
        }

        switch (this.type) {
            case TYPES.TYPE_MARGHERITA: type = 'MARGHERITA'; break;
            case TYPES.TYPE_PEPPERONI: type = 'PEPPERONI'; break;
            case TYPES.TYPE_VEGGIE: type = 'VEGGIE'; break;
            default: break;
        }

        this.extra.forEach(item => {
            switch (item) {
                case EXTRAS.EXTRA_TOMATOES: extra.push('TOMATOES'); break;
                case EXTRAS.EXTRA_CHEESE: extra.push('CHEESE'); break;
                case EXTRAS.EXTRA_MEAT: extra.push('MEAT'); break;
                default: break;
            }    
        })

        console.log(`Size: ${size}, type: ${type}; extra ingredients: ${extra.join(',')};` +
         ` price: ${this.checkPrice()}UAH.`);
    }

    removeExtraIngredient(extra) {
        this.extra = this.extra.filter(item => {
            return item !== extra;
        })
    }
}

const pizzaNew = new Pizza(SIZES.SIZE_S, TYPES.TYPE_MARGHERITA);

pizzaNew.addExtraIngredient(EXTRAS.EXTRA_CHEESE);

/* It should work */ 
// // small pizza, type: veggie
// let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
// // add extra meat
// pizza.addExtraIngredient(Pizza.EXTRA_MEAT);
// // check price
// console.log(`Price: ${pizza.getPrice()} UAH`); //=> Price: 109 UAH
// // add extra corn
// pizza.addExtraIngredient(Pizza.EXTRA_CHEESE);
// // add extra corn
// pizza.addExtraIngredient(Pizza.EXTRA_TOMATOES);
// // check price
// console.log(`Price with extra ingredients: ${pizza.getPrice()} UAH`); // Price: 121 UAH
// // check pizza size
// console.log(`Is pizza large: ${pizza.getSize() === Pizza.SIZE_L}`); //=> Is pizza large: false
// // remove extra ingredient
// pizza.removeExtraIngredient(Pizza.EXTRA_CHEESE);
// console.log(`Extra ingredients: ${pizza.getExtraIngredients().length}`); //=> Extra ingredients: 2
// console.log(pizza.getPizzaInfo()); //=> Size: SMALL, type: VEGGIE; extra ingredients: MEAT,TOMATOES; price: 114UAH.

// examples of errors
// let pizza = new Pizza(Pizza.SIZE_S); // => Required two arguments, given: 1

// let pizza = new Pizza(Pizza.SIZE_S, Pizza.SIZE_S); // => Invalid type

// let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
// pizza.addExtraIngredient(Pizza.EXTRA_MEAT);
// pizza.addExtraIngredient(Pizza.EXTRA_MEAT); // => Duplicate ingredient

// let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
// pizza.addExtraIngredient(Pizza.EXTRA_MEAT); // => Invalid ingredient

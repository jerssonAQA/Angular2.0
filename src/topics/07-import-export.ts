import { Product, taxCalculation, } from './06-funtions-destructuring';


const shoppingCart:Product[]=[
    {
        description:'nokia',
        price: 300000
    },
    {
        description: 'iPad',
        price: 500000
    }
];

const tax=0.20;
const [total, Totaltax] = taxCalculation({
    tax,
    products:shoppingCart
});

console.log('Total: ', total);
console.log('Tax: ',Totaltax);




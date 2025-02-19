import { describe, expect } from "@jest/globals"
import {calculateTotalPricePerProduct} from "../../src/utils/calculateTotalPricePerProduct";
import { goldPeach, greenBanana, specialApple, yellowKiwi } from "./const";
describe('should calculate total per product amount', () =>{
    describe('calculate apple prices',()=>{
        
        it('return total price for 2 Apples', () =>{
            expect(calculateTotalPricePerProduct(2, specialApple)).toEqual(45)
        })
    
        it('return total price for 3 Apples', () =>{
            expect(calculateTotalPricePerProduct(3, specialApple)).toEqual(75)
        })
    })

    describe('calculate banana prices',()=>{
        it('return total price for 2 Bananas, they should not have discount', () =>{
            expect(calculateTotalPricePerProduct(2, greenBanana)).toEqual(100)
        })
    
        it('return total price for 3 Bananas, they should have discount ', () =>{
            expect(calculateTotalPricePerProduct(3, greenBanana)).toEqual(130)
        })
    })

    describe('calculate peach prices',()=>{
        it('return total price for 2 Peaches', () =>{
            expect(calculateTotalPricePerProduct(2, goldPeach)).toEqual(120)
        })
    
        it('return total price for 3 Peaches', () =>{
            expect(calculateTotalPricePerProduct(3, goldPeach)).toEqual(180)
        })
    })

    describe('calculate kiwi prices',()=>{
        it('return total price for 2 Kiwis', () =>{
            expect(calculateTotalPricePerProduct(2, yellowKiwi)).toEqual(40)
        })
    
        it('return total price for 3 Kiwis', () =>{
            expect(calculateTotalPricePerProduct(3, yellowKiwi)).toEqual(60)
        })
    })

})


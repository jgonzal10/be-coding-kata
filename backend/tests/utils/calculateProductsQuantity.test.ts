import { describe, expect } from "@jest/globals"
import {calculateProductsQuantity} from "../../src/utils/calculateProductsQuantity";
import { productListMultipleApple, productListMultipleBanana,productListMultipleKiwi } from "./const";
describe('should calculate the quantity of different products ordered', () =>{

        it('return total quantity of apples from the list', () =>{
            const expectedQuantities= new Map<number,number>()
            expectedQuantities.set(1,4)
            const result = calculateProductsQuantity(productListMultipleApple)
            expect(result.get(1)).toEqual(expectedQuantities.get(1))
        })

        it('return total quantity of bananas from the list', () =>{
            const expectedQuantities= new Map<number,number>()
            expectedQuantities.set(2,5)
            const result = calculateProductsQuantity(productListMultipleBanana)
            expect(result.get(2)).toEqual(expectedQuantities.get(2))
        })

        it('return total quantity of kiwi from the list', () =>{
            const expectedQuantities= new Map<number,number>()
            expectedQuantities.set(3,7)
            const result = calculateProductsQuantity(productListMultipleKiwi)
            expect(result.get(3)).toEqual(expectedQuantities.get(3))
        })

})


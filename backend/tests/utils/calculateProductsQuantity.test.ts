import { describe, expect } from "@jest/globals"
import {calculateProductsQuantity} from "../../src/utils/calculateProductsQuantity";
import { productList } from "./const";
describe('should calculate the quantity of apples ordered', () =>{

        const expectedQuantities= new Map<number,number>()
        expectedQuantities.set(1,4)
        const result = calculateProductsQuantity(productList)
        it('return total quantity of apples from the list', () =>{
            expect(result.get(1)).toEqual(expectedQuantities.get(1))
        })

})


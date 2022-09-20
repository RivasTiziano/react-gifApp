import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Tests on AddCategory component', () => { 

    test('should change the input value', () => { 

        render( <AddCategory onNewCategory={ ()=>{} }/> )
        const inputElement = screen.getByRole("textbox")

        fireEvent.input( inputElement, {
                target: {
                    value: "elchisi"
                }
            }
        )

        expect(inputElement.value).toBe("elchisi")

    })

    test('should call onNewCategory if the input have a value', () => { 

        render( <AddCategory onNewCategory={ ()=>{} }/> )
        const inputElement = screen.getByRole("textbox")

        fireEvent.input( inputElement, {
            target: {
                value: "elchisi"
            }
        })

        fireEvent.keyDown(inputElement, {key: 'Enter'})

        expect(inputElement.value).toBe("")

    })

    test('should not call onNewCategory if the input is empty', () => { 

        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory={ onNewCategory }/> )

        const inputElement = screen.getByRole("textbox")

        fireEvent.keyDown(inputElement, {key: 'Enter'})

        expect(onNewCategory).not.toHaveBeenCalled();
    })

}) 
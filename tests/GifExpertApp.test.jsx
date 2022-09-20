import { fireEvent,render,screen, waitFor } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Tests in GifExpertApp', () => { 

    test('The snapshot should be approve', () => { 

        const {container} = render(<GifExpertApp/>)
        
        expect(container).toMatchSnapshot()

     })

    test('should create the <h3> node with the value', async () => { 

        render(<GifExpertApp/>)
        
        const value = "itachi";
        const inputElement = screen.getByRole("textbox")

        fireEvent.input( inputElement, {
                target: {
                    value
                }
            }
        )

        fireEvent.keyDown( inputElement, {key: 'Enter'} )

        expect(screen.getByText(value))

        
        await waitFor(()=>{
            expect(screen.getAllByRole("img").length).toBeGreaterThan(0);
        })

        screen.debug()
     })
 })
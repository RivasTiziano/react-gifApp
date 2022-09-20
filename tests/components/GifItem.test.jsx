import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Tests in GifItem', () => { 
    
    const gif = {
        id: 1,
        title: "Bob esponja",
        url: "https://media.revistagq.com/photos/5ca5f6a77a3aec0df5496c59/master/w_1600%2Cc_limit/bob_esponja_9564.png"
    }

    test('The snaphot should be pass and throw an error of Proptypes', () => { 

        const {container} = render(<GifItem  {...gif}/>)
        
        expect(container).toMatchSnapshot()

    })

    test('The alt and the src of the img must be the title and the url', () => { 

        render(<GifItem {...gif}/>)

        const {alt, src} = screen.getByTestId('gif-img')

        expect(alt).toBe(gif.title)
        expect(src).toBe(gif.url)

    })

    test('The element must contain the title', () => { 

        render(<GifItem title="Bob esponja"/>)

        const { innerHTML } = screen.getByTestId('gif-title')
           
        expect( innerHTML ).toBe(gif.title)

    })

})
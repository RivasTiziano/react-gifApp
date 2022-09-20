import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock("../../src/hooks/useFetchGifs")

describe('Test in <GifGrid /> component', () => { 

    test('should exist the loading and the title', () => { 

        useFetchGifs.mockReturnValue({
            gifs: [],
            loading: true
        })

        render( <GifGrid category={"itachi"} /> )
        expect(screen.getByText("loading..."))
        expect(screen.getByText("itachi"))

    })

    test('should show items when the images was loaded useFetchGifs ', () => {

        useFetchGifs.mockReturnValue({
            gifs: [
                {
                    id: "ABC",
                    title: "Itachi",
                    url: "asd"
                }
            ],
            loading: true
        })
        
        render( <GifGrid category={"itachi"} /> )
        expect(screen.getAllByRole("img").length).toBe(1)
        
    })

})
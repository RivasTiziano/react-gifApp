import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Tests on useFetchGifs hook', () => { 

    test('should return the initial state', () => { 

        const { result } = renderHook(()=>useFetchGifs("elchisi"))
        const { gifs, loading } = result.current;

        expect( gifs.length ).toBe(0);
        expect( loading ).toBeTruthy();

    })

    test('should return the state of gifs and loading after they load the request', async() => { 

        const { result } = renderHook(()=>useFetchGifs("Itachi"))

        await waitFor(
            ()=>{
                expect(result.current.gifs.length).toBeGreaterThan(0);
            }
        )

        const { gifs, loading } = result.current;

        expect( gifs.length ).toBe(10);
        expect( loading ).toBeFalsy();

    })
})
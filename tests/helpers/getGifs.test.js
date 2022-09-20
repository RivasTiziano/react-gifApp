import { getGifs } from "../../src/helpers/getGifs"

describe('Teststing getGifs helper', () => { 

    test('should return an array and should have more than 0 elements, also the elements should be an object', async () => { 

        const gifs = await getGifs("Itachi");

        expect(gifs.length).toBeGreaterThan( 0 );
        expect(gifs[0]).toEqual({ 
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ) 
        });

    })

})
import { render, fireEvent } from '@testing-library/react'
import Counter from '../components/Counter'

describe(Counter, () => {

    it('count should display intial value of 0', () => {
        // arrange - förberedelser
        const { getByTestId } = render(<Counter init={0} />) // med render hämtar vi komponenten vi vill testa

        // act - utförande
        const value = Number(getByTestId(`count`).textContent) // här hämtar vi ut värdet som finns under counter, data-testid. Vi bakar in allting under Number för att den ska förstå siffror och ej text

        //asserts - utvärdering
        expect(value).toEqual(0) // count värdet som vi stoppar in ska vara = 0 då ska testet genomföras
    })

    it('count should increment by 1 if the incremet button is presseed', () => {
        const { getByTestId, getByRole } = render(<Counter init={0} />)
        const button = getByRole('button', {name: 'Increment'})

        fireEvent.click(button)
        const value = Number(getByTestId(`count`).textContent) 

        expect(value).toEqual(1)
    })

    it('count should decrement by 1 if the decremet button is presseed', () => {
        const { getByTestId, getByRole } = render(<Counter init={0} />)
        const button = getByRole('button', {name: 'Decrement'})

        fireEvent.click(button)
        const value = Number(getByTestId(`count`).textContent) 

        expect(value).toEqual(-1)
    })

})
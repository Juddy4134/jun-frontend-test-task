import { render, screen } from '@testing-library/react';
import Pedestal from '../components/Pedestal/Pedestal';

test('Render Pedestal component test', () => {

    const horsesByPlaceString = "Gloria,Viktoria"
    const horsesByPlaceArray = horsesByPlaceString.split(",");

    render(<Pedestal horsesByPlace={horsesByPlaceString}/>);
    
    horsesByPlaceArray.forEach(elem => {
        const test = screen.getByText(elem)
        expect(test).toBeInTheDocument();
    }) 
});

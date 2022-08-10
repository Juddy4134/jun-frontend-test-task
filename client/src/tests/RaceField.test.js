import { render, screen } from '@testing-library/react';
import HorseRaceField from '../components/HorsesRaceField/HorsesRaceField';

test('Render HorseRaceField component test', () => {

    const horsesList = [
        {name: "Gloria",
        distance: 500},
        {name: "Victoria",
        distance: 350}]

    render(<HorseRaceField horseWithDistance={horsesList}/>);

    horsesList.forEach(elem => {
        const test = screen.getByText(elem.name)
        expect(test).toBeInTheDocument();
    }) 
});
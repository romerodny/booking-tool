import React from 'react';
import {Container} from 'react-bootstrap';
import { CityPicker } from './Components/CityPicker';

export class Booking extends React.Component {
    public render(): JSX.Element {
        return(
            <Container>
                <CityPicker></CityPicker>
            </Container>
        );
    }
}
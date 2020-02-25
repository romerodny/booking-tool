import React from 'react';
import cities from '../../../constants/cities.json'

export class CityPicker extends React.Component {
    public render(): JSX.Element {
        return(
            <Container>
                {alert(cities.Miami)}
            </Container>
        );
    }
}
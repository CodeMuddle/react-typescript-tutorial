import * as React from 'react';

import { WineInterface } from './tasted-wine-form';

// Defines the interface of the properties of the TastedWineForm component
export interface WPropsInterface {
    wine: WineInterface;
}

// @NOTE wine is the domain model
class TastedWine extends React.Component<WPropsInterface, null> {
    render() {
        return (
            <div className="panel panel-default">
                {/*<!-- Default panel contents -->*/}
                <div className="panel-heading">{this.props.wine.name}</div>
                <div className="panel-body">
                    <p>{this.props.wine.note}</p>
                </div>

                {/*<!-- List group -->*/}
                <ul className="list-group">
                    <li className="list-group-item">Cost: <span> {this.props.wine.cost} </span></li>
                    <li className="list-group-item">Rating: <span> {this.props.wine.rating} </span></li>
                </ul>
            </div>
        );
    }
}
export default TastedWine;

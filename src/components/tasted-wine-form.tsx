import * as React from 'react';
/**
 * 
 * read1: https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
 */

export interface WineInterface {
    name: string; cost: number; rating: number; note: string;
}

// Defines the interface of the properties of the TastedWineForm component
export interface TWPropsInterface {
    saveRecord: (wine: WineInterface) => void;
}

// Defines the interface of the state of the TastedWineForm component
export interface TWStateInterface {
    wine: WineInterface;
}

const EMPTY_RECORD = { name: '', cost: 0, rating: 0, note: '' };

// tasted/src/components/tasted-wine-form.tsx
class TastedWineForm extends React.Component<TWPropsInterface, TWStateInterface> {
    constructor(props: TWPropsInterface) {
        super(props);
        let wine: WineInterface = EMPTY_RECORD;
        this.state = { wine };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    resetForm() {
        this.setState({ wine: EMPTY_RECORD });
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let wine = this.state.wine;
        wine = Object.assign(wine, { [name]: value });
        this.setState({ wine });
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.saveRecord(this.state.wine);
        this.resetForm();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group label-floating">
                    <label htmlFor="i1" className="control-label">Name</label>
                    <input
                        id="i1"
                        name="name"
                        type="text"
                        value={this.state.wine.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group label-floating">
                    <label htmlFor="i2" className="control-label">Cost</label>
                    <input
                        id="i2"
                        name="cost"
                        type="number"
                        value={this.state.wine.cost}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group label-floating">
                    <label htmlFor="i3" className="control-label">Rating</label>
                    <input
                        id="i3"
                        name="rating"
                        type="number"
                        className="form-control"
                        value={this.state.wine.rating}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group label-floating">
                    <label htmlFor="i4" className="control-label">Note</label>
                    <input
                        id="i4"
                        name="note"
                        type="text"
                        className="form-control"
                        value={this.state.wine.note}
                        onChange={this.handleChange}
                    />
                </div>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default TastedWineForm;

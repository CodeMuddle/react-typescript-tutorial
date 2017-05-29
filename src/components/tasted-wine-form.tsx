import * as React from 'react';
/**
 * 
 * read1: https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
 */

export interface WineInterface {
    name: string; cost: number; rating: number; note: string;
}
export interface CustomObject  { // any key-value pair
    [key: string]: string | number; 
}

// Defines the interface of the properties of the TastedWineForm component
export interface TWPropsInterface {
    saveRecord: (wine: WineInterface) => void;
}

// Defines the interface of the state of the TastedWineForm component
export interface TWStateInterface {
    wine: WineInterface;
}

const EMPTY_RECORD = { name: '', cost: NaN, rating: NaN, note: '' };

// tasted/src/components/tasted-wine-form.tsx
class TastedWineForm extends React.Component<TWPropsInterface, TWStateInterface> {
    constructor(props: TWPropsInterface) {
        super(props);
        let wine: WineInterface = Object.assign({}, EMPTY_RECORD);
        this.state = { wine };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    isEmpty(inputObject: WineInterface | CustomObject): boolean {
        return Object.keys(inputObject).some(key => !inputObject[key]);
    }
    resetForm() {
        this.setState({ wine: Object.assign({}, EMPTY_RECORD) });
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
        if (this.isEmpty(this.state.wine)) { return; }
        this.props.saveRecord(this.state.wine);
        this.resetForm();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-inline">
                <div className="form-group label-floating">
                    {/*<label htmlFor="i1" className="control-label">Name</label>*/}
                    <input
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        type="text"
                        value={this.state.wine.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group label-floating">
                    {/*<label htmlFor="i2" className="control-label">Cost</label>*/}
                    <input
                        className="form-control"
                        placeholder="Cost"
                        name="cost"
                        type="number"
                        value={this.state.wine.cost}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group label-floating">
                    {/*<label htmlFor="i3" className="control-label">Rating</label>*/}
                    <input
                        className="form-control"
                        placeholder="Rating"
                        name="rating"
                        type="number"
                        value={this.state.wine.rating}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group label-floating">
                    {/*<label htmlFor="i4" className="control-label">Note</label>*/}
                    <input
                        className="form-control"
                        placeholder="Note"
                        name="note"
                        type="text"
                        value={this.state.wine.note}
                        onChange={this.handleChange}
                    />
                </div>

                <input type="submit" value="Submit" className="btn btn-default" />
            </form>
        );
    }
}
export default TastedWineForm;

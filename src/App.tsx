import * as React from 'react';
import './App.css';

import TastedWine from './components/tasted-wine';
import TastedWineForm from './components/tasted-wine-form';
import { WineInterface } from './components/tasted-wine-form';

export interface APropsInterface { }
export interface AStateInterface {
  wineList: Array<WineInterface>;
}

class App extends React.Component<APropsInterface, AStateInterface> {
  constructor(props: APropsInterface) {
    super(props);
    this.state = { wineList: [] };

    this.saveRecord = this.saveRecord.bind(this);

  }

  componentDidMount() {

    let wineList = this.state.wineList;
    let wineListString = window.localStorage.getItem('tasted:wine-list');
    if (wineListString) { wineList = JSON.parse(wineListString) as Array<WineInterface>; }

    // update the state
    if (wineList.length !== this.state.wineList.length) { this.setState({ wineList }); }

  }

  saveRecord(wine: WineInterface) {
    // @TODO do not use localStorage
    let wineList: Array<WineInterface> = [];
    let wineListString = window.localStorage.getItem('tasted:wine-list');
    if (wineListString) { wineList = JSON.parse(wineListString) as Array<WineInterface>; }

    wineList.push(wine);

    wineListString = JSON.stringify(wineList);

    window.localStorage.setItem('tasted:wine-list', wineListString);

    this.setState({ wineList });

  }

  render() {
    let TastedWineList = this.state.wineList.map((wine, i) => <TastedWine key={i} wine={wine} />);
    return (
      <div className="App" >
        <div className="tasted-form">
          <TastedWineForm saveRecord={this.saveRecord} />
        </div>
        <div className="App-intro">
          {TastedWineList}
        </div>
      </div>
    );
  }
}

export default App;

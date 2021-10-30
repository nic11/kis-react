import React from 'react';

import ContactsForm from './ContactsForm';
import ContactsView from './ContactsView';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { displayedContactInfo: null };
  }

  handleFormUpdate(contactInfo) {
    this.setState({ actualContactInfo: { ...this.state?.actualContactInfo, ...contactInfo } });
  }

  updateDisplayedData() {
    this.setState({ displayedContactInfo: this.state.actualContactInfo });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <ContactsForm onUpdate={ this.handleFormUpdate.bind(this) } />
        <input type="button" value="Обновить" onClick={ this.updateDisplayedData.bind(this) } />
        <ContactsView contactInfo={ this.state.displayedContactInfo } />
      </div>
    );
  }
}

export default App;

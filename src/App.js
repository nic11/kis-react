import React from 'react';

import ContactsForm from './ContactsForm';
import ContactsView from './ContactsView';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.actualContactInfo = null;
  }

  handleFormUpdate(contactInfo) {
    this.actualContactInfo = contactInfo;
  }

  updateDisplayedData() {
    this.setState(this.actualContactInfo);
  }

  render() {
    return (
      <div className="App">
        <ContactsForm onUpdate={ this.handleFormUpdate.bind(this) } />
        <input type="button" value="Обновить" onClick={ this.updateDisplayedData.bind(this) } />
        <ContactsView contactInfo={ this.state } />
      </div>
    );
  }
}

export default App;

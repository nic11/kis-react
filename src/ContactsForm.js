import React from 'react';

class ContactsForm extends React.Component {
  handleUpdate(updatedFields) {
    const newState = { ...this.state, ...updatedFields };
    this.setState(newState);
    this.props.onUpdate(newState);
  }

  makeField(fieldDescription, fieldName) {
    return (
      <div>
        {fieldDescription + ': '}
        <input type="text" onChange={ (e) => this.handleUpdate({ [fieldName]: e.target.value }) } />
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.makeField('Твоё имя', 'name') }
        { this.makeField('Как связаться', 'contactInfo') }
      </div>
    );
  }
}

export default ContactsForm;

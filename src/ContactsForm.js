import React from 'react';

class ContactsForm extends React.Component {
  makeField(fieldDescription, fieldName) {
    return (
      <div>
        {fieldDescription + ': '}
        <input type="text" onChange={ (e) => this.props.onUpdate({ [fieldName]: e.target.value }) } />
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

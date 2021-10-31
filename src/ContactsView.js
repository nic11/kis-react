import React from 'react';

class ContactsView extends React.Component {
  render() {
    if (!this.props.contactInfo) {
      return null;
    }
    const { name, contactInfo } = this.props.contactInfo;
    return (
      <div>
        Меня зовут { name || '[не указано]' },
        для связи используйте { contactInfo || '[не указано]' }
      </div>
    );
  }
}

export default ContactsView;

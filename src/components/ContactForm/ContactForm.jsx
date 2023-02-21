import React, { Component } from 'react';
import s from '../App.module.css';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState(() => ({
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>
            Name
            <input
              value={this.state.name}
              onChange={this.onInputChange}
              type="text"
              name="name"
              placeholder="enter name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              value={this.state.number}
              onChange={this.onInputChange}
              type="tel"
              name="number"
              placeholder="enter number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;

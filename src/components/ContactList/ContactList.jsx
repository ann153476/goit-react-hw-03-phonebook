import PropTypes from 'prop-types';
import s from '../App.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <div>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.flex}>
          <div className={s.box__contact}>
            <p>{name}</p>
            <p>{number}</p>
          </div>

          <button
            className={s.btn}
            type="submit"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

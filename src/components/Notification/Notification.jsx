import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

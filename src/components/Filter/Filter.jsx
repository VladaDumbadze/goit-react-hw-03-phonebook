import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter({ filter, handleChange }) {
  return (
    <label className={css.title}>
      Find contacts by name
      <input
        className={css.text}
        type="text"
        name="filter"
        value={filter}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        required
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
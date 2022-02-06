import PropTypes from 'prop-types';
import s from "components/TransactionHistory/TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  
  return (
   <table className={s.table}>
      <thead className={s.caption}>
        <tr>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={s.line}>
              <td className={s.item}>{type}</td>
              <td className={s.item}>{amount}</td>
              <td className={s.item}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired
  ).isRequired
}


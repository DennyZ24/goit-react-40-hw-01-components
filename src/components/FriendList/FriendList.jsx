import PropTypes from 'prop-types';
import FriendListItem from "components/FriendListItem/FriendListItem";
import s from "components/FriendList/FriendList.module.css";

export default function FriendList({friends}) {
  return (
    <ul className={s.list}>
      {friends.map(
        ({ avatar, name, isOnline, id }) => {
          return (
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
          )
       }
     )}
    </ul>
  )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired
}


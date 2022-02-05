import PropTypes from 'prop-types';

export default function FriendListItem(props) {
  const { avatar, name, isOnline, id } = props;

  return (
    <li class="item" key={id}>
      <span class="status"></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  )
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

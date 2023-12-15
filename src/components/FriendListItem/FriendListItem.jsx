import css from './FriendListItem.module.css';

export const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  const statusType = isOnline ? css.online : css.offline;

  return (
    <li className={css.item}>
      <span className={`${css.status} ${statusType}`}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

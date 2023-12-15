import { FriendsListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <div className={css.box}>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendsListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

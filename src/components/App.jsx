import Profile from "./Profile/Profile.js";
import user from './FileJson/user.json';
import './style.css';
import Statistics from "./Statistics/Statistics.js";
import data from "./FileJson/data.json"
import FriendList from "./FriendList/FriendList.js";
import friends from "./FileJson/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory.js";
import transactions from "./FileJson/transactions.json";
export const App = () => {
  const color = ['aqua','rgb(91, 78, 177)','rgb(197, 80, 80)','rgb(80, 197, 164)','rgb(183, 78, 125)'];
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
        padding: '20px 0'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics 
        title="Upload stats" 
        rgb={color}
        stats={data}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory 
        items={transactions} 
      />
    </div>
  );
};

import "../FriendList/FriendList.css";
import PropTypes from 'prop-types';
const FriendList = ({friends}) =>{
        const onlinePeople = friends.map(({avatar,name,isOnline,id})=> {
          const online = isOnline? "green": "red";
        return(
            <li className="item" key={id}>
            <span className="status" style={{backgroundColor: online}}></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
        );    
        }
        
        );
return(
    
    <ul className="friend-list">
        {onlinePeople}
    </ul>
);
}
FriendList.propTypes ={
    friends: PropTypes.arrayOf(
         PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    })
    )
};
export default FriendList;
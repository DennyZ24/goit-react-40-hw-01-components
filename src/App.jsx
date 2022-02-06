import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import FriendList from "components/FriendList/FriendList";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";
import Container from "components/Container/Container";
import user from "user.json";
import statdata from "data.json";
import friends from "friends.json";
import transactions from "transactions.json";

function App() {
  return (
    <Container>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} 
      />
      
      <Statistics title='Upload stats' stats={statdata} />
      <Statistics stats={statdata} />

      <FriendList friends={friends} />
        
      <TransactionHistory items={transactions} />
    </Container>
  
  )
}

export default App;

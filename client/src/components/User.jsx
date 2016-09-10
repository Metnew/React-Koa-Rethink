import React from 'react';
import Relay from 'react-relay';

class User extends React.Component {
  render() {
    var user = this.props.user;
    return (
      <View>
        <Image uri={user.avatar} />
        <Text>{user.name}</Text>
        <Text>{user.contacts.jabber}</Text>

      </View>
    );
  }
}


export default Relay.createContainer(User, {
  fragments: {
    user: ()=> Relay.QL`{
        fragment on User {
            name,
            avatar,
            contacts
        }
    }`
  }
});

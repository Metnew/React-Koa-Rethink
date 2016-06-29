import React from 'react';
import Relay from 'react-relay';

class Dealer extends React.Component {
  render() {
    var dealer = this.props.dealer;
    return (
      <View>
        <Image uri={dealer.avatar} />
        <Text>{dealer.name}</Text>
        <Text>{dealer.contacts.jabber}</Text>
        
      </View>
    );
  }
}


export default Relay.createContainer(UserView, {
  fragments: {
    user: ()=> Relay.QL`{
        fragment on UserView
    }`
  }
});

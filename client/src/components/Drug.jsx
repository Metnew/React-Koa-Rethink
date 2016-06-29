import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';


class Drug extends React.Component {
  render() {
    var drug = this.props.drug;
    return (
      <View>
        <Image uri={story.author.profilePicture.uri} />
        <Text>{story.author.name}</Text>
        <Text>{story.text}</Text>
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

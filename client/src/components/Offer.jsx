import React from 'react';
import Relay from 'react-relay';
import Card from 'material-ui/lib/card/card';
// import CardActions from 'material-ui/lib/card/card-actions';
// import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
// import FlatButton from 'material-ui/lib/flat-button';
// import CardText from 'material-ui/lib/card/card-text';

class Offer extends React.Component {
    render() {
        var offer = this.props.offer;
        return (
            <Card>
                <CardMedia overlay={< CardTitle title = "Overlay title" subtitle = "Overlay subtitle" />}>
                    <img src={offer.author.profilePicture}/>
                </CardMedia>
                <Text>{offer.author.name}</Text>
                <Text>{offer.text}</Text>
            </Card>
        );
    }
}

export default Relay.createContainer(Offer, {
    fragments: {
        user: () => Relay.QL `{
        fragment on Offer
    }`
    }
});

import React from 'react';
import Relay from 'react-relay';
import Offer from './Offer'
// import GridList, GridTitle from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';
//
class OfferList extends React.Component {
    render() {
        var offers = this.props.offers;
        return (
            (<div></div>)
            // <div>{offers.map((offer) => <Offer offer={offer}></Offer>)}</div>
        )
    }
}

export default Relay.createContainer(OfferList, {
    fragments: {
        // offers: () => Relay.QL `{
        //     fragment on OfferList {
        //
        //     }
        // }`
    }
});

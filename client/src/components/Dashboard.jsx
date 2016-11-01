import React from 'react';
import Relay from 'react-relay';
import OfferList from './OfferList';

const Dashboard = React.createClass({

    getInitialState() {
        return {
            // chart: {
            //     width: 100,
            //     height: 400
            // }
        }
    },
    render() {
        console.log(this.props)
        // const {offers} = this.props;
        // const {prepareStyles} = this.context.muiTheme;
        // const ChartStyles = this.getStyles().chart;
        return (
            <div>
                <OfferList offers={this.props.offers}></OfferList>
            </div>
        )
    }
})

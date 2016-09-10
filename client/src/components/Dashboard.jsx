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

    getStyles() {
        return {
            // chart: {
            //     width: (this.state.chart.width || '100%'),
            //     height: (this.state.chart.height || 300)
            // }
        }
    },

    render() {
        let offers = this.state.offers;
        // const {prepareStyles} = this.context.muiTheme;
        // const ChartStyles = this.getStyles().chart;
        return (<OfferList></OfferList>)
    }
})


export default Relay.createContainer(Dashboard, {
    fragments: {
        // offers: () => Relay.QL `{
        //     fragment on Dashboard {
        //
        //     }
        // }`
    }
});

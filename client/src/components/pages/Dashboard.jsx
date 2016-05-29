import React from 'react';
// import Chart from '../assets/Chart';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
// import CardHeader from 'material-ui/lib/card/card-header';
// import CardMedia from 'material-ui/lib/card/card-media';
// import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
// import CardText from 'material-ui/lib/card/card-text';

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
        // const {prepareStyles} = this.context.muiTheme;
        // const ChartStyles = this.getStyles().chart;


        return (
            <Card>
                {/*<CardHeader title="URL Avatar" subtitle="Subtitle" avatar="http://lorempixel.com/100/100/nature/"/>
                <CardMedia overlay={< CardTitle title = "Overlay title" subtitle = "Overlay subtitle" />}>
                    <Chart style={prepareStyles(ChartStyles)} data={Data}/>
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle"/>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>*/}
                <CardActions>
                    <FlatButton label="Action1"/>
                    <FlatButton label="Action2"/>
                </CardActions>
            </Card>
        )
    }
});

export default Dashboard;

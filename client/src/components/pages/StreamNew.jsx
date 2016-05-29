import React from 'react';
// import {connect} from 'react-redux';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
// import AutoComplete from 'material-ui/lib/auto-complete';

const StreamNew = React.createClass({
    getInitialState(){
        return {
            search_user_id: ''
        }
    },

    setInput(value) {
        this.search_user_id = value
    },

    render() {
        return (
            <Card>
                <CardHeader title="Test App" subtitle="Is template good?" avatar="http://lorempixel.com/100/100/nature/"/>
                <CardMedia overlay={< CardTitle title = "Overlay title" subtitle = "Overlay subtitle" />}>
                    <img src="http://lorempixel.com/600/337/abstract/"/>
                </CardMedia>
                <CardTitle title="New Stream"/>
                <CardText>
                </CardText>
                <CardActions>
                    <FlatButton label="Action1"/>
                    <FlatButton label="Action2"/>
                </CardActions>
            </Card>
        )
    }
})
// <AutoComplete onUpdateInput={setInput} filter={numberFilter}/>

export default StreamNew;

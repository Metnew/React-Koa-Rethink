import React from 'react';
import Relay from 'react-relay';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class DrugList extends React.Component {
    render() {
        return (
            <div style={styles.root}>
                <GridList cellHeight={200} style={styles.gridList}>
                    <Subheader>December</Subheader>
                    {tilesData.map((tile) => (
                        <GridTile
                            key={tile.img}
                            title={tile.title}
                            subtitle={<span> by <b> {tile.author}</b></span>}
                            actionIcon={<IconButton><StarBorder color="white"/></IconButton>}>
                            <img src={tile.img}/>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }
}

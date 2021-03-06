import React, { Component } from 'react'
import {selectSong} from '../actions'
import { connect } from 'react-redux'
 class SongList extends Component {
    renderList(){
        return this.props.state.map((song)=>{
            
            return  (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary"
                        onClick={()=>this.props.selectSong(song)}
                        >Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }


    render() {
        console.log(this.props)

       return<div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state)=>{
    
    return {state:state.songs}
}
export default connect(mapStateToProps,{selectSong})(SongList);

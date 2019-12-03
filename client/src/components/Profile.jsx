import React, { Component } from 'react';
import axios from "axios";
import blankprofile from "../assets/blankprofile.png";

import "./Profile.scss";
import ToBuyList from "./ToBuyList";

class Profile extends Component {
    state = {  }
    constructor(props){
        super(props);

        this.state={
            items:[],
            user_id: props.user_id,
            inventory: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount(){
        axios.get("/api/inventory",{
            params: {
                user_id: this.state.user_id
            }
        }).then(res=>{});
    }

    addItem(e) {
        if(this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) =>{
                return{
                    items: prevState.items.concat(newItem)
                };
            });
        }
        this._inputElement.value="";
        console.log(this.state.items);
        e.preventDefault();
    }

    deleteItem(key){
        var filteredItems = this.state.items.filter(function(item){
            return(item.key !== key)
        });

        this.setState({items: filteredItems});
    }
    
    render() { 
        return ( 
            <div className="ProfilePage">
                <div className="leftside">
                    <h3>Your Profile</h3>
                    <img src={blankprofile} className="ProfileImg"></img>
                </div>

                <div className="ItemsNeed">
                    <h3>Items Need to Purchase:</h3>
                    <div className="header">
                        <form onSubmit={this.addItem}>
                            <input ref={(a) => this._inputElement = a}
                            placeholder="Enter Item"></input>
                            <button type="submit">Add</button>
                        </form>
                    </div>
                    <ToBuyList entries={this.state.items}
                    delete={this.deleteItem}/>
                </div>
            </div>


         );
    }
}

export default Profile;
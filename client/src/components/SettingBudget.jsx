import React, { Component } from 'react';

class SettingBudget extends Component {
    state = {  }
    render() { 
        return (  
            <div className="card card-body mb-3">
                <label> Your Budget </label>
                <form>
                    <input className="form-control mr-2" 
                    type="number" />
                    <button className= "btn btn-dark btn-block">Enter
                    </button>
                </form>
            </div>
        );
    }
}
 
export default SettingBudget;
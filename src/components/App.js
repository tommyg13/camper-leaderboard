import React from "react";
import CampersList from "./CampersList";
import axios from "axios";


class App extends React.Component {
    constructor(props) {
        super([props]);
        this.state = {
            recentCampers:[],
            allTimeCampers:[],
            current: "recentCampers"
        };
    }
    
    componentWillMount() {
        axios.all([this.recentCampersList(), this.allTimeCampersList()])
        .then(axios.spread((recent,all)=>{
            this.setState ({
          recentCampers: recent.data,
          allTimeCampers: all.data
            });
        }));
    }
    
    recentCampersList() {
        return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
    }
    
    allTimeCampersList() {
        return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime");
    }
    
    handleChange(currentView) {
        this.setState({current: currentView});
        console.log(currentView);
    }
    
    render() {
        return (
            <div className="container">
             <h1 className="text-center">Camper Leaderboard</h1>
<table className="table table-striped">
    <thead>
      <tr>
      <th># </th>
        <th>Username</th>
        <th onClick={()=>this.handleChange("recentCampers")} id="past">Points in last 30 days</th>
        <th onClick={()=>this.handleChange("allTimeCampers")} id="all">All time points</th>
      </tr>
    </thead>
    <CampersList campers={this.state[this.state.current]} />
  </table>
  </div>
            )
    }
}

export default App;
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={term:'',
                    country:'in'};
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);
        this.countryCode=this.countryCode.bind(this);
    }
    onInputChange(event){
        this.setState({term:event.target.value})
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term,this.state.country);
        this.setState({term :''});
    }
    countryCode(event){
        
        this.setState({country:event.target.country});
    }
    render(){
        
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <div className="dropdown">
                <select onChange={this.countryCode} className="form-control">
                    <option value="in">India</option>
                    <option value="us">USA</option>
                </select>
                </div>
                                <input placeholder="Search for the city" 
                className="form-control input-lg" 
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn"> 
                    <button className="btn btn-default" type="submit">
                        Search
                    </button>
                </span>
            </form>
        );
    }

}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
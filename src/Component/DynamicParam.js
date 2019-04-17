import React, {Component} from 'react';


class DynamicParam extends Component{

constructor(){
	super();



}

componentDidMount(){
	console.log(this.props);
	console.log(this.props.match.params.route);
	const parmaVal = this.props.match.params.route;

	// call API using


}

render(){

    return (
 		<div><h1>Dymamic Component ..</h1></div>
   	);
}
 

}

export default DynamicParam;
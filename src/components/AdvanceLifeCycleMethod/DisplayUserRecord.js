import React from 'react';


class DisplayUserRecord extends React.Component{
	constructor(props){
 		super(props);
	}
     render(){
		return(
			<>
			<tr>
	        	<td>{this.props.user.id}</td>
	        	<td>{this.props.user.email}</td>
	        	<td>{this.props.user.first_name} {this.props.user.last_name}</td>	
	        	<td><img src={this.props.user.avatar} width="150" height="150" /></td>
	             <td><button onClick={this.props.viewUsers(this.props.user.id)}>View</button></td>
        	</tr>
			</>	        	
		);
	}

}

export default DisplayUserRecord;
import React from 'react';
import DisplayUserRecord from './DisplayUserRecord.js'

class LifeCycleMethod extends React.Component{
	constructor(){
		super();
		this.state={
			userData:'',
			singleUser:''
		}
	}

	fetchUsers(){
		 fetch('https://reqres.in/api/users')
		      .then(res => res.json())
		      .then(res => this.setState({ userData: res.data }));
	}

	viewUsers(userId){
		 fetch('https://reqres.in/api/users/'+userId)
		      .then(res => res.json())
		      .then(res => this.setState({ singleUser: res.data }));
	}
//onClick={viewUsers(user.id)}
	render(){
		return(
			<div>
			  <h1>List of users</h1>
                 <table width="100%" height="100%">
                   <tr>
                   		<td>User Id</td>
                   		<td>User Email</td>
                   		<td>User Name</td>
                   		<td>User Image</td>
                   		<td>Options</td>
                   </tr>
				{this.state.userData.length === 0 ? 
					<tr><td colspan="4">No user Found</td></tr> :
				        this.state.userData.map((user) =><tr>
				        	<td>{user.id}</td>
				        	<td>{user.email}</td>
				        	<td>{user.first_name} {user.last_name}</td>	
				        	<td><img src={user.avatar} width="150" height="150" /></td>
                             <td><button onClick={this.viewUsers.bind(this, user.id)}>View</button></td>
				        	</tr>
				        	)
				      }
				      </table>
				      {this.state.singleUser != '' ? 
				      	<div>
				      	<table width="100%" height="100%">
		                   <tr>
		                   		<td>User Id</td>
		                   		<td>{this.state.singleUser.id}</td>
		                   </tr>
		                   <tr>
		                   		<td>User Email</td>
		                   		<td>{this.state.singleUser.email}</td>
		                   </tr>
		                    <tr>
		                   		<td>User Name</td>
		                   		<td>{this.state.singleUser.first_name} {this.state.singleUser.last_name}</td>
		                    </tr>
		                    <tr>
		                   		<td>User Image</td>
		                   		<td><img src={this.state.singleUser.avatar}  /></td>
		                   </tr>		                             
		                   </table>
				      	</div>

				      : null}
			</div>
		);
	}
	componentDidMount(){
		this.fetchUsers();
	}
}

export default LifeCycleMethod;
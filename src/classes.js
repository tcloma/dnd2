// const UserObject = {
//     firstName: 'Michael',
//     lastName: 'Law',
//     singup: function () {
//         console.log(this.firstName, 'signed up!')
//     }
// }

// console.log(UserObject)

// class User {
//     constructor(name, email, password) {
//         this.name = name
//         this.email = email
//         this.password = password
//     }

//     singup() {
//         console.log(this.name, 'signed up!')
//         super(name, email, password)
//         this.admin = true
//     }
// }

// class AdminUser extends User {
//     constructor(name, email, password) {

//     }
// }


// let user = new User('Michael', 'michael@gmail.com', '123456')

// console.log(user)

import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <h1> Hello React</h1>
                <h2> Count is {this.state.count}</h2>
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 })
                }}> Click me! </button>
            </div>
        )
    }
}

export default App;

import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    firstname: '',
    lastname: '',
    fullname: '',
  }

  handleFirstName = (e) => {
    this.setState({
      firstname: e.target.value,
    })
  }

  handleLastName = (e) => {
    this.setState({
      lastname: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      fullname: this.state.firstname + ' ' + this.state.lastname,
    })

    this.state.firstname = ''
    this.state.lastname = ''
  }

  render() {
    return (
      <div className="p-4 border-2 rounded-xl w-80">
        <div className="mx-auto">
          <form onSubmit={this.handleSubmit}>
            <h3 className="text-3xl font-medium mt-3 mb-5">Register</h3>
            <input
              className="text-slate-900 text-lg block my-3 py-2 px-3 font-semibold rounded-lg w-full"
              onChange={this.handleFirstName}
              type="text"
              value={this.state.firstname}
              placeholder="First Name"
            />
            <input
              className="text-slate-900 text-lg block my-3 py-2 px-3 font-semibold rounded-lg w-full"
              onChange={this.handleLastName}
              type="text"
              value={this.state.lastname}
              placeholder="Last Name"
            />
            <button
              type="submit"
              className="bg-sky-500 px-4 py-2 mt-2 rounded-lg font-semibold text-lg"
            >
              Submit
            </button>
            <p
              className="mt-3
          "
            >
              my name is {this.state.fullname ? this.state.fullname : '....'}
            </p>
          </form>
        </div>
      </div>
    )
  }
}

import axios from 'axios'
import React, { Component } from 'react'

export default class ProfileUpdateForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            first_name: "",
            last_name: "",
            username: "",
            city: "",
            state: "",
            zip_code: "",
        }
    }
    componentDidMount() {
        axios.get("https://run.mocky.io/v3/a2eebe62-c28f-478d-a8e3-523e589eb31f")
            .then(response => {
                this.setState({
                    isLoaded: true,
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    username: response.data.username,
                    city: response.data.address.city,
                    state: response.data.address.state,
                    zip_code: response.data.address.zip_code,
                })
            })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                })
            })
    }
    onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post("https://run.mocky.io/v3/a2eebe62-c28f-478d-a8e3-523e589eb31f", this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                this.setState({
                    error
                })
            })
            alert("Form Submitted!!")
    }

    onChangeHandle = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { first_name, last_name, username, city, state, zip_code } = this.state
        const { error, isLoaded } = this.state
        if (error) {
            return <div>Error: {error.message}</div>
        }
        else if (!isLoaded) {
            <div>Loading...</div>
        }
        else {
            return (
                <div>
                    <form onSubmit={this.onSubmitHandler} className="row g-3">
                        <div>
                            {}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationDefault01" className="form-label">First name</label>
                            <input type="text" className="form-control" id="validationDefault01" name='first_name' value={first_name} onChange={this.onChangeHandle} required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationDefault02" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="validationDefault02" name='last_name' value={last_name} onChange={this.onChangeHandle} required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" name='username' value={username} onChange={this.onChangeHandle} required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="validationDefault03" className="form-label">City</label>
                            <input type="text" className="form-control" id="validationDefault03" name='city' value={city} onChange={this.onChangeHandle} required />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationDefault04" className="form-label">State</label>
                            <select className="form-select" id="validationDefault04" name='state' onChange={this.onChangeHandle} required>
                                <option value={state}>{state}</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Bihar">Bihar</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationDefault05" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="validationDefault05" name='zip_code' value={zip_code} onChange={this.onChangeHandle} required />
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

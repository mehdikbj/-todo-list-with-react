import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextField, Button } from '@material-ui/core'

class FormAddItem extends Component {
  constructor(props) {
    super(props)
    this.state = { description: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = description => event => {
    this.setState({ [description]: event.target.value })
  }

  handleSubmit = event => {
    const { addDescription } = this.props
    event.preventDefault()
    addDescription(this.state.description)
    this.setState({ description: '' })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <span>
            <TextField
              id="standard-description"
              label="Description"
              value={this.state.description}
              onChange={this.handleChange('description')}
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              id="button-form"
            >
              Add item in the list
            </Button>
          </span>
        </form>
      </div>
    )
  }
}

FormAddItem.propTypes = {
  addDescription: PropTypes.func.isRequired,
}

export default FormAddItem

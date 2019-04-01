import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FormAddItem from './components/formAddItem'
import Heading from './components/common/Heading'
import ListItems from './components/listItems'
import actions from './store/listItem/actions'

const App = ({ addDescription, listItems, deleteDescription }) => (
  <div>
    <Heading title="To-Do List" size="h1" />
    <FormAddItem addDescription={addDescription} />
    <ListItems listItems={listItems} deleteItem={deleteDescription} />
  </div>
)

App.propTypes = {
  addDescription: PropTypes.func.isRequired,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteDescription: PropTypes.func.isRequired,
}

const mapStateToProps = state => state.listDescription

const mapDispatchToProps = dispatch => ({
  addDescription: description =>
    description ? dispatch(actions.addDescription(description)) : null,
  deleteDescription: id => {
    dispatch(actions.deleteDescription(id))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

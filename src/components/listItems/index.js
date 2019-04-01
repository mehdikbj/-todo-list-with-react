import React from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@material-ui/core'

const ListItems = ({ listItems, deleteItem }) => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Item description</TableCell>
          <TableCell align="right">Delete Button</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {listItems.map(item => (
          <TableRow key={item.id}>
            <TableCell component="th" scope="row">
              {item.description}
            </TableCell>
            <TableCell align="right">
              <Button
                id={`delete${item.id}`}
                type="submit"
                variant="contained"
                color="primary"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
)

ListItems.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
}

export default ListItems

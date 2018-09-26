module.exports = `
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { bases: state.bases };
};


const ConnectedList = ({ bases }) => (
  <ul >
    {bases.map(base => (
      <li  key={base.id}>
        {base.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
`
import React from 'react'
import styles from '../../styles/UserDetails.module.css';
import { DataGrid } from '@mui/x-data-grid';


function UserList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,

    },
  ];

  const rows = [
    {
      id: 1, UserName: 'jhon Snow', avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      email: "jhon@gmail.com",
      status: "Active",
      transaction: "$120.00",
    },
    {
      id: 2, UserName: 'jhon Snow', avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      email: "jhon@gmail.com",
      status: "Active",
      transaction: "$120.00",
    },
    {
      id: 3, UserName: 'jhon Snow', avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      email: "jhon@gmail.com",
      status: "Active",
      transaction: "$120.00",
    },
    {
      id: 4, UserName: 'jhon Snow', avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      email: "jhon@gmail.com",
      status: "Active",
      transaction: "$120.00",
    },
    {
      id: 5, UserName: 'jhon Snow', avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      email: "jhon@gmail.com",
      status: "Active",
      transaction: "$120.00",
    },
    {
      id: 6, UserName: 'jhon Snow', avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      email: "jhon@gmail.com",
      status: "Active",
      transaction: "$120.00",
    },
    {
      id: 7, UserName: 'jhon Snow', avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      email: "jhon@gmail.com",
      status: "Active",
      transaction: "$120.00",
    },

  ];
  return (
    <div className={styles.UserList}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList;
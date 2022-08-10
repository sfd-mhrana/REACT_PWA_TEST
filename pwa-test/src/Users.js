import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap'
function Users() {
    const [data, setData] = useState([])
    const [mode, setMode] = useState('online')
    useEffect(() => {
        let url = "http://jsonplaceholder.typicode.com/users";
        fetch(url).then((response) => {
            response.json().then((result) => {
                // console.warn("Result is ", result)
                setData(result)
                localStorage.setItem('users', JSON.stringify(result))
            })
        }).catch(err => {
            let collection = localStorage.getItem('users')
            setData(JSON.parse(collection))
            setMode('offline')
            //alert('catch block')
        })
    }, [])

    return (
        <div>
            <h1>User List</h1>
            <span>
                {
                    mode === 'offline' ?
                        <p className="alert alert-warning" role="alert">You are offline</p>
                        :
                        ""
                }
            </span>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length ?
                            data.map((item, i) => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                    </tr>)
                            })

                            :
                            <p>No Data Found</p>
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Users;
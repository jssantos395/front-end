import React from 'react';

const Home = () => {
    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <button className="btn btn-warning">Add Data</button>
                </div>
                <table class="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job Title</th>
                            <th scope="col">Contact Info.</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Super Mario</td>
                            <td>iluvpeach@gmail.com</td>
                            <td>Plumber</td>
                            <td>516.884.9090</td>
                            <td className="d-flex justify-content-between">
                               <button className="btn btn-success"><i class="fa-solid fa-glasses"></i></button> 
                               <button className="btn btn-primary"><i class="fa-solid fa-pencil"></i></button>
                               <button className="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Super Mario</td>
                            <td>iluvpeach@gmail.com</td>
                            <td>Plumber</td>
                            <td>516.884.9090</td>
                            <td className="d-flex justify-content-between">
                               <button className="btn btn-success"><i class="fa-solid fa-glasses"></i></button> 
                               <button className="btn btn-primary"><i class="fa-solid fa-pencil"></i></button>
                               <button className="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>




            </div>
        </div>
    )
}

export default Home;
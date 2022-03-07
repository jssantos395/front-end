import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const Details = () => {
    return (
        <div className="container mt=3">
            <h1 style={{ fontWeight: 400 }}>Employee Information</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <i id="card" class="fa-solid fa-address-card"></i>
                            <h3 className="mt-3">Name: <span style={{ fontWeight: 400 }}>Super Mario</span></h3>
                            <h3 className="mt-3">Age: <span style={{ fontWeight: 400 }}>55</span></h3>
                            <h3 className="mt-3">Email: <span style={{ fontWeight: 400 }}>SuperM@gmail.com</span></h3>
                            <h3 className="mt-3">Job Title: <span style={{ fontWeight: 400 }}>Plumber</span></h3>
                            <h3 className="mt-3">Mobile: <span style={{ fontWeight: 400 }}>(516)994.9098</span></h3>
                            <h3 className="mt-3">Location: <span style={{ fontWeight: 400 }}>New York, NY</span></h3>
                            <h3 className="mt-3">Description: <span style={{ fontWeight: 400 }}>One demetet on file for leaving early to save girlfriend from a giant turtle.</span></h3>
                            <div className="right_view col-lg-6 col-md-6 col-12">
                                <button id="view" className="btn btn-primary"><i class="fa-solid fa-pencil"></i></button>
                                <button id="view" className="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                            </div>
                        </div>
                        </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Details
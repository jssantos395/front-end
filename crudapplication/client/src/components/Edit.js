import React, { useState } from 'react'

const Edit = () => {

    const [inpval,setINP] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: "",
    })

    const setdata = (e) => {
        console.log(e.taeget.value);
        const {name,value} = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]:value
            }
        })
    }

    return (
        <div>
            <div className="container">
        <form className="mt-4">
        <div className="row">
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="email" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Email</label>
                <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Age</label>
                <input type="text" value={inpval.age} onChange={setdata} name="age" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Mobile</label>
                <input type="number" value={inpval.mobile} onChange={setdata} name="mobile" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Work</label>
                <input type="number" value={inpval.work} onChange={setdata} name="work" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Address</label>
                <input type="text" value={inpval.add} onChange={setdata} name="address" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-12 col-md-12 col-12">
                <label for="exampleInputPassword1" class="form-label">Employee Notes</label>
                <textarea name="notes" value={inpval.desc} onChange={setdata} class="form-control" id="" cols="30" rows="10"></textarea>
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
            </div>
        </form>
    </div>

        </div>
    )
}

export default Edit
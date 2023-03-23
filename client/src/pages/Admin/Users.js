import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";


const Users = () => {
    return (
        <Layout title={"All Users-Dashboard"}>
            <div className="container-fluid mt-5 pt-5">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <h1><ul>Team member</ul></h1>
                        <ul>
                            <li className="mb-3" style={{ fontSize: "30px" }}>
                                <b>Name:</b> Mahira Arefin <br />
                                <b>Email:</b> 19202103337@cse.bubt.edu.bd
                            </li>
                            <li className="mb-3" style={{ fontSize: "30px" }}>
                                <b>Name:</b> Farhana Islam <br />
                                <b>Email:</b> 19202103333@cse.bubt.edu.bd
                            </li>
                            <li className="mb-3" style={{ fontSize: "30px" }}>
                                <b>Name:</b> Tahjib Hossain <br />
                                <b>Email:</b> 19202103323@cse.bubt.edu.bd
                            </li>
                            <li className="mb-3" style={{ fontSize: "30px" }}>
                                <b>Name:</b> Md.Tanzim Ehsan <br />
                                <b>Email:</b> 19202103361@cse.bubt.edu.bd
                            </li>
                            <li style={{ fontSize: "30px" }}>
                                <b>Name:</b> Apurba Halder <br />
                                <b>Email:</b> 19202103360@cse.bubt.edu.bd
                            </li>
                            {/* <div class="card" style={{ width: "18rem" }}>
                                <img src="/images/tanzim.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div> */}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Users;
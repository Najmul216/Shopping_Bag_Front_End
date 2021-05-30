import React from 'react'

function YourAccountView() {
    return (
        <div>

            <div className="container mt-5">
                {/* <!-- Your Account Starts --> */}

                <h2 className="text-center text-success">Your Account Dashboard</h2>

                {/* <!-- Account Panel Starts --> */}

                <div className="row">
                    <div className="col-md-4">
                        <a href="your_orders.html" className="btn w-100">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <i className="fas fa-2x fa-shopping-bag"></i>
                                        <span className="h4">Your Orders</span>
                                    </div>
                                    <small className="text-muted">Track, return or buy things again.</small>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-4">
                        <a href="change_password.html" className="btn w-100">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <i className="fas fa-2x fa-key"></i>
                                        <span className="h4">Password Change</span>
                                    </div>
                                    <small className="text-muted">You Can Change your password.</small>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-4">
                        <a href="your_addresses.html" className="btn w-100">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <i className="fas fa-2x fa-map-marked-alt"></i>
                                        <span className="h4">Your Addresses</span>
                                    </div>
                                    <small className="text-muted">You Can Edit addresses for orders.</small>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* <!-- Account Panel Starts --> */}

                <div className="row">
                    <div className="col-md-4">
                        <a href="seller_account_intro.html" className="btn w-100">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <i className="fas fa-universal-access fa-2x"></i>
                                        <span className="h4">Seller Account</span>
                                    </div>
                                    <small className="text-muted">Sell your products.</small>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="dropdown-divider"></div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title text-center font-weight-bold">
                                    <i className="far fa-handshake fa-2x"></i>
                                    <span className="h4">Payment Via</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <a href="http://">bkash</a>
                                    <a href="http://">Nagad</a>
                                    <a href="http://">U-Cash</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Your Account Ends --> */}
        </div>
    )
}


export default YourAccountView;
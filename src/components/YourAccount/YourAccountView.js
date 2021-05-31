import React from 'react'

function YourAccountView(props) {

    const { t, i18n } = props;
    const rtl = (i18n.languages[0] == 'pk' ? 'text-right' : '');

    return (
        <div>

            <div className="container mt-5 mb-5">
                {/* <!-- Your Account Starts --> */}

                <h2 className={`text-center text-success ${rtl}`}>{t('your_account.title')}</h2>

                {/* <!-- Account Panel Starts --> */}

                <div className="row">
                    <div className="col-md-4">
                        <a href="your_orders.html" className="btn w-100">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <i className="fas fa-2x fa-shopping-bag"></i>
                                        <span className={`h4 ml-2 ${rtl}`}>{t('your_account.btn1.title')}</span>
                                    </div>
                                    <small className={`text-muted ${rtl}`}>{t('your_account.btn1.sub_title')}</small>
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
                                        <span className={`h4 ml-2 ${rtl}`}>{t('your_account.btn2.title')}</span>
                                    </div>
                                    <small className={`text-muted ${rtl}`}>{t('your_account.btn2.sub_title')}</small>
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
                                        <span className={`h4 ml-2 ${rtl}`}>{t('your_account.btn3.title')}</span>
                                    </div>
                                    <small className={`text-muted ${rtl}`}>{t('your_account.btn3.sub_title')}</small>
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
                                        <span className={`h4 ml-2 ${rtl}`}>{t('your_account.btn4.title')}</span>
                                    </div>
                                    <small className={`text-muted ${rtl}`}>{t('your_account.btn4.sub_title')}</small>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* <div className="dropdown-divider"></div>
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
                </div> */}
            </div>
            {/* <!-- Your Account Ends --> */}
        </div>
    )
}


export default YourAccountView;
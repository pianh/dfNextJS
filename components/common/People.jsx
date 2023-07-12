import React from 'react';

export default function People({ className }) {
    return (
        <>
            <div className="row ">
                <div className="col-12 col-sm-4 col-lg-4">
                    <div className={className}>
                        <img src="/assets/images/team-img-2.png" alt="people" />
                        <h4>ANNA STIL</h4>
                        <h5>BRIEDMAID</h5>
                    </div>
                    <div>
                        <img src="/assets/images/team-img-4.png" alt="" />
                        <h4>LAURA MITTE</h4>
                        <h5>BRIEDMAID</h5>
                    </div>
                </div>
                <div className="col-12 col-sm-4 col-lg-4">
                    <div>
                        <img src="/assets/images/team-img-7.png" alt="people" />
                        <h4>SIMONA JAGGER</h4>
                        <h5>BRIEDMAID</h5>
                    </div>
                    <div>
                        <img src="/assets/images/team-img-4.png" alt="" />
                        <h4>SIMONA JAGGER</h4>
                        <h5>BRIEDMAID</h5>
                    </div>
                </div>
                <div className="col-12 col-sm-4 col-lg-4">
                    <div>
                        <img src="/assets/images/team-img-3.png" alt="people" />
                        <h4>SIMONA JAGGER</h4>
                        <h5>BRIEDMAID</h5>
                    </div>
                    <div>
                        <img src="/assets/images/team-img-6.png" alt="" />
                        <h4>SIMONA JAGGER</h4>
                        <h5>BRIEDMAID</h5>
                    </div>
                </div>
            </div>
        </>
    );
}

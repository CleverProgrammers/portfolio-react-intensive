import React from 'react';
export default function PageHeader(props) {
    const { title, smallDesc } = props.post;
    return (
        <div className="page-title-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="page-title pt-80 pb-60">
                            <h1>{title}</h1>
                            <p>{smallDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

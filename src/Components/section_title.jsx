import React from 'react';
export default function SectionTitle(props) {
    const { title, subTitle, desc } = props;
    return (
        <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
                <div className="section-title text-center">
                    <h3 className="section-name pc">{title}</h3>
                    <h2>{subTitle}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}



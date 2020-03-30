import React from 'react'

const newsCard = props => {
    return (
        <div className="col-md-6">
            <div className="card mb-4 box-shadow">
                <img src={props.image} className="App-logo" alt="logo" />
                <div className="card-body">
                    <p className="text-center"><b>{props.title}</b></p>
                    <p className="card-text">{props.content}</p>
                    <span className="text-danger"><b>SOURCE: </b>{props.source}</span><br />
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{props.time}</small>
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary"><a href={props.location}target="blank">Read More</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default newsCard;
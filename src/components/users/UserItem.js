import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const UserItem = ({ user: { login, avatar_url, html_url } }) => {
    return (
        <div className="card" style={{ width: '12rem' }}>
            <img className="card-img-top" src={avatar_url} alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">{login}</h5>
                <Link to={`/user/${login}`} className="btn btn-dark btn-block">View Profile</Link>
            </div>
        </div>
    )
}

UserItem.propType = {
    user: PropTypes.object.isRequired,
}

export default UserItem;

import React from 'react'
import PropTypes from 'prop-types'

const RepoItem = ({ repo }) => {
    return (

        <div className="card">
            <ul>
                <li>
                    <a href={repo.html_url}>{repo.name}</a>
                </li>
            </ul>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.array.isRequired
}
export default RepoItem;

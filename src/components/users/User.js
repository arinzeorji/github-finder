import React, { useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import Repos from '../repos/Repos';
import Spinner from '../layouts/Spinner';
import GithubContext from '../../context/github/githubContext';

const User = () => {

    const githubContext = useContext(GithubContext);
    const { getUser, user, loading, repos, getUserRepos } = githubContext;
    const { login } = useParams();

    useEffect(() => {
        getUser(login);
        getUserRepos(login)
        // eslint-disable-next-line
    }, [])

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        html_url,
        followers,
        twitter_username,
        following,
        public_gists,
        public_repos,
        created_at,
        hireable
    } = user;

    if (loading) {
        return <Spinner />
    } else {
        return (
            <>
                <div className="card-group">
                    <div className="card">
                        <img className="card-img-top" src={avatar_url} alt="Card cap" style={{ width: '18rem' }} />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Location:{location}</p>
                            <p>hireable:{hireable}</p>
                            <a href={html_url}>Go to Github Page</a>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Created At: {created_at}</small>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">About {name}</h5>
                            <p className="card-text">{bio}</p>
                            <p className="card-text">Username:{login}</p>
                            <p className="card-text">Company:{company}</p>
                            <p className="card-text">Website:{blog}</p>
                            <p className="card-text">Twitter Handle:{twitter_username}</p>
                            <button type="button" className="btn btn-sm m-1 btn-danger">
                                Publi Gists <span className="badge badge-light">{public_gists}</span>
                            </button>
                            <button type="button" className="btn btn-sm m-1 btn-warning">
                                Public Repos <span className="badge badge-light">{public_repos}</span>
                            </button>
                            <button type="button" className="btn btn-sm m-1 btn-info">
                                Followers <span className="badge badge-light">{followers}</span>
                            </button>
                            <button type="button" className="btn btn-sm m-1 btn-dark">
                                Following <span className="badge badge-light">{following}</span>
                            </button>
                            <br /><br /><br />
                            <Link to="/" className="btn btn-primary">Go Home</Link>
                        </div>

                    </div>

                </div>

                <div className="card">
                    <Repos repos={repos} />
                </div>

            </>
        )
    }
}

export default User;
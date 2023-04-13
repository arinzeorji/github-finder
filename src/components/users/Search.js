import { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';


const Search = (props) => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const { searchUsers, users, clearUsers } = githubContext;
    const { setAlert } = alertContext;

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please Enter something', 'light')
        } else {
            searchUsers(text);
            setText('')
        }
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <br />
            <form className='form' onSubmit={handleSubmit}>

                <input
                    onChange={handleChange}
                    value={text}
                    type="text"
                    name="text"
                    className="form-control"
                    placeholder="Search Users..." />

                <br />
                <input
                    type="submit"
                    value="Search Users"
                    className="btn bg-blue white"

                />

            </form>
            {

                users.length > 0 && <button onClick={clearUsers}
                    className="btn btn-light btn-block">Clear</button>

            }

        </>
    )
}

export default Search;

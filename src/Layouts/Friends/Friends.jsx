import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import './Friends.css'
function Friends() {
    const user_image = localStorage.getItem('user_image')
    const name = localStorage.getItem('user_name')
    const user_name = localStorage.getItem('user_user_name')
    const user_id = localStorage.getItem('user_id')
    const [friends, setFriends] = useState([])
    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState('')

    const handleInput = (e) => {
        setFilter(e.target.value)
    }
    const seeUsers = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "searchTerm": filter,
            "excludedUserId": user_id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/api/users/seeUsers", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                const filteredUsers = result.filter(user => !friends.some(friend => friend.id === user.id));
                setUsers(filteredUsers);
            })
            .catch(error => console.log('error', error));
        const updatedUsers = [...users].filter(item => !friends.includes(item));
        console.log(updatedUsers)
        console.log(friends)
        setUsers(updatedUsers)

    }
    useEffect(() => {
        seeUsers()
    }
        , [filter, friends])

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "user_id": user_id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/api/users/seeFriends", requestOptions)
            .then(response => response.json())
            .then(result => setFriends(result))
            .catch(error => console.log('error', error));
    }, [filter])

    const addFriend = (user2_id) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "user1_id": user_id,
            "user2_id": user2_id
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/api/users/addFriend", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                //setear users quitando el elemento al que le hago clic
                const updatedUsers = users.filter(user => user.id !== user2_id);
                setUsers(updatedUsers);
            })
            .catch(error => console.log('error', error));

    }
    return (
        <div className='friends'>
            <div className="top-gradient" />
            <div className="header">Amigos
            </div>
            <input
                value={filter}
                onChange={(e) =>
                    handleInput(e)}
                className='search-bar' type="text" />
            <svg className='search-logo' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.7417 20.7417L16.0806 16.0723M16.0806 16.0723C17.7343 14.4164 18.6637 12.1722 18.6637 9.83183M16.0806 16.0723L16.0787 16.0746M18.6637 9.83183C18.6637 7.48948 17.7332 5.24307 16.0769 3.58678C14.4206 1.93049 12.1742 1 9.83183 1C7.48948 1 5.24307 1.93049 3.58678 3.58678C1.93049 5.24307 1 7.48948 1 9.83183C1 12.1742 1.93049 14.4206 3.58678 16.0769C5.24307 17.7332 7.48948 18.6637 9.83183 18.6637C12.1742 18.6637 14.4206 17.7332 16.0769 16.0769L16.0787 16.0746M18.6637 9.83183C18.6637 12.1732 17.7337 14.4185 16.0787 16.0746" stroke="#BFC0C1" stroke-width="2" stroke-linecap="round" />
            </svg>

            {filter === '' && friends.length > 0 ? <div> <div className="divider">
                <p>Tus amigos</p>
                <svg width="212" height="2" viewBox="0 0 240 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="240" y2="1" stroke="#E4E6E8" stroke-width="2" />
                </svg>
            </div>
                <div className="friends-container">

                    {friends.length ? friends.map(friend => <div className="friend">
                        <div className="profile-info">
                            <img src={friend.image} alt="" />
                            <div className="profile-text">
                                <div className="name">{friend.name}</div>
                                <div className="user_name">{friend.user_name}</div>
                            </div>
                        </div>

                    </div>) : null}

                </div></div> : <div> <div className="divider">
                    <p>Busca a tus amigos</p>
                    <svg width="145" height="2" viewBox="0 0 240 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1" x2="240" y2="1" stroke="#E4E6E8" stroke-width="2" />
                    </svg>
                </div>
                <div className='friends-container'>
                    {users.length ? users.map(friend => <div className="friend">
                        <div className="profile-info">

                            <img src={friend.image} alt="" />
                            <div className="profile-text">
                                <div className="name">{friend.name}</div>
                                <div className="user_name">{friend.user_name}</div>
                            </div>
                            <svg
                                onClick={() => addFriend(friend.id)}
                                className='add-friend'
                                width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 12.3137V1M12.6569 6.65685H1.34315" stroke="#26262E" stroke-width="2" stroke-linecap="round" />
                            </svg>

                        </div>

                    </div>) : null}
                </div>
            </div>}


            <NavBar />
        </div>
    )
}

export default Friends
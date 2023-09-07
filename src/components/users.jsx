import { useEffect, useState, useContext } from "react";
import { getUsers } from "../Api";
import {UserContext} from "../context/user-context"

const Users = () => {
    const [users, setUsers] = useState([])
    const {setUser} = useContext(UserContext)
    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users)
        })
    }, [])


return users.map((user) => {
    return (
        <div>
            <h2>{user.username}</h2>
            <img
          onClick={() => {
            setUser(user.username);
          }}
          src={user.avatar_url}
        />
        </div>
    )
})
}

export default Users; 
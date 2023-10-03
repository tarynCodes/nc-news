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
        <div className="user">
            <h2>Click on me to login!</h2>
            <h3>{user.username}</h3>
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
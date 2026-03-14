import { useQuery } from '@apollo/client/react';
import { LOAD_USERS } from '../graphQL/queries';
import { useEffect, useState } from 'react';

function GetUsers() {
  const { data, loading, error } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data, loading, error]);

  return (
    <div>
      {users.map((val) => (
        <h1 key={val.id}>{val.firstName}</h1>
      ))}
    </div>
  );
}

export default GetUsers;

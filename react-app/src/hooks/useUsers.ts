import { useEffect, useState } from "react";
import userService ,{ User } from "../services/user-services";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [stack, setStack] = useState<User[]>([]);
  
    useEffect(() => {
      setLoading(true);
  
      const { request, cancel } = userService.getAll<User>();
      request
        .then((res) => {
          setUsers(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          if (err instanceof CanceledError) return;
          setError(err.message);
  
          setLoading(false);
        });
      return () => cancel();
    }, []);
  
    return {users, error, isLoading, stack, setUsers, setError, setStack};
}
export default useUsers;
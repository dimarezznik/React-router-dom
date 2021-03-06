import {User} from "../dto/user";

class UserClient {
    getUsers = (users: any) => {
        fetch(`http://jsonplaceholder.typicode.com/users`)
            .then((res) => res.json())
            .then((data: User[]) => users(data));
    }

    getPerson = (id: any, setPerson: any) => {
        fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => setPerson(data));
    }
}

export const userClient = new UserClient();
import React, {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getResponse} from "../../../async/getUsers";

interface PersonType {
    name: string;
    username: string;
    email: string
}

const Person: FC = () => {
    const {id} = useParams()
    const [person, setPerson] = useState<PersonType | null>(null)
    useEffect(() => {
        getResponse.getPerson(id, setPerson)
    }, [id])
    return (
    <>

        {id}
        {person && (
            <>
                <h1>Name: {person.name}</h1>
                <p>#{person.username}</p>
                <p>Email: {person.email}</p>
            </>
            )
        }

    </>
  );
};

export default Person;

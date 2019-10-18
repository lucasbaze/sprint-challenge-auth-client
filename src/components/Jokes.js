import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils';

import { Segment } from 'semantic-ui-react';

export const Jokes = () => {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        async function getJokes() {
            try {
                let jokes = await axiosWithAuth().get('/jokes');
                console.log(jokes.data);
                if (jokes) {
                    setJokes(jokes.data);
                } else {
                    setJokes('There was a joke retreval error');
                }
            } catch (e) {
                setJokes([{ joke: 'You are not logged in' }]);
            }
        }

        getJokes();
    }, []);

    return (
        <>
            <h1>Jokes</h1>
            {jokes.length == 0 ? (
                <h1>Loading...</h1>
            ) : (
                jokes.map(joke => {
                    return (
                        <Segment>
                            <div>{joke.joke}</div>
                        </Segment>
                    );
                })
            )}
        </>
    );
};

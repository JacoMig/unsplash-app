import React, {useEffect, useState} from 'react';
import {InputGroupText, Form, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputSearch = (props) => {
    
    const {searchPhotos, match} = props;
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        query !== "" && searchPhotos(query)
    }

    const handleChange = (e) => {
        const val = e.target.value;
        setQuery(val);
    }

    useEffect(() => {
        !match.params.query && setQuery("");
        match.params.query && setQuery(match.params.query);
    }, [match.params.query])
    
    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Input 
                    type="text" 
                    name="inputQuery" 
                    id="inputQuery" 
                    value={query}
                    placeholder="Search free high resolution photos" 
                    onChange={handleChange}
                    />
                <InputGroupAddon addonType="append">
                    <InputGroupText onClick={handleSubmit}>
                        <FontAwesomeIcon icon="search" />
                    </InputGroupText>
                </InputGroupAddon>    
            </InputGroup>
        </Form>
    );
};

export default InputSearch;
import React, {useEffect, useState} from 'react';
import {InputGroupText, Form, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const InputSearch = (props) => {
    
    const {match, history} = props;
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        query !== "" && history.push(`/${query}`);
    }

    const handleChange = (val) => {
        // const val = e.target.value;
        setQuery(val);
    }

    useEffect(() => {
        !match.params.query && setQuery("");
        match.params.query && setQuery(match.params.query);
        
    }, [match.params.query])
    
    return (
        <Form  data-testid="form" id="form" onSubmit={handleSubmit}>
            <InputGroup>
                <Input 
                    type="text" 
                    name="inputQuery" 
                    data-testid="inputQuery"
                    id="inputQuery" 
                    value={query}
                    placeholder="Search free high resolution photos" 
                    onChange={(e) => handleChange(e.target.value)}
                    />
                <InputGroupAddon addonType="append">
                    <InputGroupText id="submitButton" onClick={handleSubmit}>
                        <FontAwesomeIcon icon="search" />
                    </InputGroupText>
                </InputGroupAddon>    
            </InputGroup>
        </Form>
    );
};

export default InputSearch;
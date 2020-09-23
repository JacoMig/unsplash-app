import React, {useContext, useEffect, useState} from 'react';
import {InputGroupText, Button, Form, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {AppContext} from '../context/AppContext';
import styled from 'styled-components';

const SearchButton = styled.button`
    width: 100%;
    margin: 20px 0;
`


const InputSearch = (props) => {
    
     const {searchPhotos} = props;
   // const {setPhotos} = useContext(AppContext); 
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
      //  console.log(query)
       // setPhotos([])
        searchPhotos(query)
    }

    // useEffect(() => {}, [photos])

    const handleChange = (e) => {
        const val = e.target.value;
        setQuery(val);
    }
    
   

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <FontAwesomeIcon icon="search" />
                    </InputGroupText>
                </InputGroupAddon>
                <Input 
                    type="text" 
                    name="inputQuery" 
                    id="inputQuery" 
                    value={query}
                    placeholder="Search free high resolution photos" 
                    onChange={handleChange}
                    />
            </InputGroup>
            <SearchButton type="submit" className="btn btn-success"  >Cerca</SearchButton>
        </Form>
    );
};

export default InputSearch;
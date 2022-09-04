import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import Notiflix from 'notiflix';
import {
    SearchbarHead,
    SearchForm,
    SearchFormBtn,
    SearchFormBtnLabel,
    SearchFormInput,
} from "./Searchbar.styled"

export const Searchbar = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handleChange = e => {
        const value = e.currentTarget.value;
        if(value){ 
            setValue(value.toLowerCase())
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        if(value.trim() === '') {
            return Notiflix.Notify.warning('Enter your query');
        }
        onSubmit(value);
        setValue('');
    };

    return(
        <SearchbarHead>
            <SearchForm 
            onSubmit={handleSubmit}
            >
                <SearchFormBtn type="submit">
                    <SearchFormBtnLabel>Search</SearchFormBtnLabel>
                    <ImSearch/>
                </SearchFormBtn>

                <SearchFormInput
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={value}
                    onChange={handleChange}
                />
            </SearchForm>
        </SearchbarHead>
    )
}
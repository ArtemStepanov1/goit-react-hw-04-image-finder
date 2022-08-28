import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import Notiflix from 'notiflix';
import {
    SearchbarHead,
    SearchForm,
    SearchFormBtn,
    SearchFormBtnLabel,
    SearchFormInput,
} from "./Searchbar.styled"

export class Searchbar extends Component {
    state = {
        value: '',
    }

    handleChange = e => {
        const value = e.currentTarget.value;
        if(value){ 
            this.setState({ value: value.toLowerCase() })
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        
        if(this.state.value.trim() === '') {
            Notiflix.Notify.warning('Enter your query');
            return;
        }
        this.props.onSubmit(this.state.value);
        this.setState({ value: '' })

    };

    render() {
        return(
            <SearchbarHead>
                <SearchForm 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
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
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </SearchForm>
            </SearchbarHead>
        )
    }
}
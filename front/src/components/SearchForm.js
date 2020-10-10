import React from 'react';

export const SearchForm = ({results}) => {

    return (
        <form>
            <div className="input-field">
                <i className="material-icons prefix">search</i>
                <input id="icon_prefix" type="text" className="validate" autoComplete="off"
                onChange={e => results(e.target.value)}/>
                <label htmlFor="icon_prefix">Search for a book</label>
            </div>
        </form>
    );
}

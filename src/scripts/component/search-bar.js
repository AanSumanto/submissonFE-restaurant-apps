class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: 'open',
        });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
    <style>
    

    .search-container > input {
        width: 75%;
        padding: 16px;
        border: 0;
        border-bottom: 1px solid black;
        font-weight: bold;
        background-color: #F7FD04;
    }

    .search-container > input:focus {
        outline: 0;
        border-bottom: 2px solid black;
    }

    .search-container > input:focus::placeholder {
        font-weight: bold;
    }

    .search-container >  input::placeholder {
        color: cornflowerblue;
        font-weight: normal;
    }

    .search-container > button {
        width: 30%;
        cursor: pointer;
        margin-left: auto;
        padding: 15px;
        width: auto;
        background-color: cornflowerblue;
        color: white;
        border: 0;
        text-transform: uppercase;
    }

    @media screen and (max-width: 550px){
        .search-container {
            flex-direction: column;
            position: static;
        }

        .search-container > input {
            width: 100%;
            margin-bottom: 12px;
        }

        .search-container input::placeholder  {
            width: 50%;
            font-size:15px
        }

        .search-container > button {
            width: 100%;
        }
    }

    </style>

       <div id="search-container" class="search-container">
           <input placeholder="Search Favorite Restaurant" id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
       </div>
       `;

        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);
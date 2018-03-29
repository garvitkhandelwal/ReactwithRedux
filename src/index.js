import React from 'react'
import ReactDOM from 'react-dom'
import searchBar from './components/search_bar'

const API_KEY = 'AIzaSyBOcItdEkJwA4V1AbovSLMLrqPe5wyKcXs';

// We will create a component.
const App = () => {
    return (
        <div>
            <searchBar />
        </div>
    );
};




// We will put the component's HTML on the page (on the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));

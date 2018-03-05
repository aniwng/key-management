import FontAwesome from 'react-fontawesome';

import '../../styles/Search.css';

const SearchBox = () => {
    return (
        <div className='input-group'>
            <input type='text' id='searchKey' className='form-control' name='q' placeholder='Search for a key...' />
            <span className='input-group-btn'>
                <button type='Search' id='executeSearch' name='search' className='btn'>
                    <FontAwesome name='search' />
                </button>
            </span>
        </div>
    );
};

export default SearchBox;
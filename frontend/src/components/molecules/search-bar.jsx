import SearchButton from '../atoms/search-button';
import SearchInput from '../atoms/search-input';

const SearchBar = () => {
	return (
		<div className='relative'>
			<SearchInput />
			<SearchButton />
		</div>
	);
};

export default SearchBar;

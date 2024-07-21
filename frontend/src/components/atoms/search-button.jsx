import SearchIcon from '@mui/icons-material/Search';

const SearchButton = () => {
	return (
		<div>
			<button className='h-12 bg-secondary hover:bg-green-700 duration-300 text-white font-semibold px-4 rounded-r-lg absolute top-0 right-4'>
				<SearchIcon />
			</button>
		</div>
	);
};

export default SearchButton;

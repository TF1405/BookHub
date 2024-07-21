import BaseButton from '../atoms/button';

const AuthButton = () => {
	return (
		<div className='flex w-full'>
			<div className='m-auto'>
				<BaseButton
					className={
						'h-12 border hover:bg-white hover:text-primary duration-300 text-white font-medium px-6 rounded-lg text-sm'
					}
					buttonName={'Login'}
				/>
			</div>
			<div className='m-auto'>
				<BaseButton
					className={
						'h-12 bg-secondary hover:bg-green-700 duration-300 text-white font-medium px-6 rounded-lg text-sm'
					}
					buttonName={'Sign Up'}
				/>
			</div>
		</div>
	);
};

export default AuthButton;

const MenuBttnCategory = ({ categorys, selectCategory }) => {
	return (
		<div className='flex flex-row items-center justify-center md:justify-center md:gap-8'>
			{categorys.map((category) => (
				<button
					className='flex items-center w-32 pr-2 py-2 border-b border-secoundary-one hover:border-main hover:text-3xl text-main text-2xl'
					key={category}
					onClick={() => selectCategory(category)}>
					{category}
				</button>
			))}
		</div>
	);
};

export { MenuBttnCategory };

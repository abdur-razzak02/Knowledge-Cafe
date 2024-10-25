import profile from '../../images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 mb-3 px-3 lg:px-0'>
            <h1 className='text-4xl mb-3 py-3'>Knowledge Cafe</h1>
            <img src={profile} alt='profile' className='w-12'/>
        </div>
    );
};

export default Header;
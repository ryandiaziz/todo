
const Navbar = () => {
    return (
        <nav className="relative flex items-center justify-between px-5 py-2 shadow-md h-16">
            <div className="font-inter font-bold text-2xl text-todo-violet">TODO</div>
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="User Profile" className="h-11 w-11 object-cover rounded-full cursor-pointer" />
        </nav>
    )
}

export default Navbar
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const { user,logOut} = useContext(AuthContext)
  // console.log(user);
  
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.error(error))
}

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <p className="btn btn-ghost normal-case text-xl">
          Learning Platfrom
        </p>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <ul className="p-2 bg-base-100"></ul>

          <li>
            <Link to="/blog">Blog</Link>
          </li>

         {
           user?.uid ?
           <button className='ml-2 btn btn-ghost' onClick={handleLogOut}>logOut</button > :


         <div className="felx">
          <li>
           <Link to="/login">Login</Link>
         </li>
         <li>
           <Link to="/registar">Register</Link>
         </li>
         </div>
         }


        </ul>
      </div>
    </div>
  );
};

export default Header;

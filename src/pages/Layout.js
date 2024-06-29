import { Outlet, Link } from "react-router-dom";
import './Layout.css';


const Layout = () => {
  return (
    <>
    <link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <div class="search">
            <form action="#">
                <input type="text" placeholder="Search Courses" name="search"></input>
                <button>
                    <i class="fa fa-search"></i>
                </button>
            </form>
        </div>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
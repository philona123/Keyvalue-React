import '../styles/SideNav.css'
import CompanyLogo from '../img/kv logo.png'
import ListImage from '../img/List.png'

function SideNav() {
    return (
        <aside>
        <nav className='sidenav'>
            <div className="logo">
                <a href="/">
                    <img src={CompanyLogo} alt="Company Logo"/>
                </a>
            </div>

            <ul>
                <li>
                    <a className="handle" href="/employees">
                        <div>
                            <img src={ListImage} alt="List Icon"/>
                        </div>
                        <h6>
                            Employee List
                        </h6>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
    );
}

export default SideNav;
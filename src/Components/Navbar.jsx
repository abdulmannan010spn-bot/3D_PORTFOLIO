import { navLinks } from "../Constants"

const Navbar = () => {
  return (
    <header className="navbar bg-black">
        <div className="inner">
             <a className="logo" href="#hero">
                Abdul Mannan
             </a>
             <nav className="desktop">
                  <ul>
                    {navLinks.map(({link,name})=>(
                        <li key={name} className="group">
                            <a href={link}>
                                <span>{name}</span>
                                <span className="underline" />
                            </a>
                        </li>
                    ))}
                </ul> 
             </nav>

             <a href="#contact" className="contact-btn group">
                <div className="inner">
                    <span>Contact Me</span>
                </div>
             </a>
        </div>
    </header>
  )
}
export default Navbar
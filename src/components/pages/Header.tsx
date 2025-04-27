import { Link } from "react-router-dom"
function Header() {
  return (
    <>
    <div>
        <div className="bg-cyan-200 p-5 rounded-2xl">
            <ul className="flex justify-between">
                <li><Link to="/" className="px-4 py-2 hover:underline">Home</Link></li>
                <li><Link to ="/report" className="px-4 py-2 hover:underline">Report Incident</Link></li>
                <li><Link to ="/contact" className="px-4 py-2 hover:underline">Contact</Link></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Header
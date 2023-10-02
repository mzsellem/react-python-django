import { Link } from "react-router-dom";

export default function Navbar() {
   return (
      <>
         <Link to="/patients">Patients</Link>
         <Link to="/">Home</Link>
      </>
   );
}

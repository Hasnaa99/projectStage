import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function NavBar() {
    const navigate = useNavigate()
    const admin = JSON.parse(localStorage.getItem('admin'))
    const logout = async () => {
        const confirmL = confirm('Êtes-vous sûr de vouloir vous déconnecter ?');
        if(confirmL){
            try {
                await axios.post('http://127.0.0.1:8000/api/logout');
                localStorage.clear();
                navigate('/login');
            } catch (error) {
                console.error('Erreur lors de la déconnexion :', error);
            }
        }
        
    };
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                </div>
                <div className="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">


                        {admin&&<div className="dropdown">
                            <button className="btn btn-light mx-5 dropdown-toggle" style={{ color: "#333" }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-user" style={{color: "#333", fontSize:'17px',margin:"5px 5px 6px 7px"}}></i>{admin.nom} {admin.prenom}
                            </button>
                            <ul className="dropdown-menu mt-1 mx-5" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Mon profile</a></li>
                                <li><button className="dropdown-item" onClick={logout}>Déconnexion</button></li>
                            </ul>
                        </div>}

                </div>
            </div>
        </nav>

    )
}

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import styled from 'styled-components';
import Pagination from './Pagination';
const Button = styled.button`
padding: 10px;
background-color: #23906b;
color: #fff;
border: none;
border-radius: 0 5px 5px 0;
cursor: pointer;
&:hover{
  background-color: #1aa37a;
color: #fff;

}
`
    ;
export default function ListEmploys() {
    const [employeFilter, setEmployeFilter] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [employeData, setEmployeData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const employesPerPage = 8;
    const handleSearch = (e) => {
        setIsSearching(true);
        setSearchValue(e.target.value);
        setEmployeFilter(employeData.filter((employee) =>
            employee.matricule === parseInt(e.target.value))
        )


    };
    const indexOfLastEmploye = currentPage * employesPerPage;
    const indexOfFirstEmploye = indexOfLastEmploye - employesPerPage;
    const currentEmployes = employeData.slice(indexOfFirstEmploye, indexOfLastEmploye);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const handleReturnToList = () => {
        setIsSearching(false);
        setSearchValue('');
    };
    useEffect(() => {
        fetchData();

    }, [])
    const fetchData = async () => {
        try {
            const resultat = await axios("http://127.0.0.1:8000/api/employes");
            setEmployeData(resultat.data.resultats);
        } catch (err) {
            console.log('Something wrong');
        }

    }
    const handleDelete = async (id) => {
        const confirmation = window.confirm("Voulez-vous vraiment supprimer cet employé ?")
        if (confirmation) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/deleteEmploye/${id}`);
                setEmployeData(prevUserData => prevUserData.filter(employe => employe.id !== id));
                console.log('Employe deleted successfully');
            } catch (error) {
                console.error('Error deleting user:', error);
            }

        }

    }


    return (
        <div className='container-fluid'>
            <div className="col-md-6 m-3 mb-4">
                <div className="input-group">
                    <input
                        type="number"
                        className="form-control p-2"
                        placeholder="Rechercher par matricule..."
                        onChange={handleSearch}
                        value={searchValue}
                    />
                    <Button className="btn " type="button">
                        Rechercher
                    </Button>
                </div>
            </div>
            {isSearching && currentEmployes.length === 0 && (
                <p className='alert alert-warning '>Aucun employé trouvé.</p>
            )}
            <div className='table-responsive'>
                <table className='table table-bordered'>

                    <thead>
                        <tr className='text-center'>
                            <th>Matricule</th>
                            <th>CIN</th>
                            <th>Nom complet </th>
                            <th>Date d'embauche</th>
                            <th>Post</th>
                            <th>Responsable</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (isSearching ? employeFilter : currentEmployes).map((employe, i) => (
                                <tr key={i}>
                                    <td>{employe.matricule}</td>
                                    <td>{employe.cin}</td>
                                    <td>{employe.nom} {employe.prenom}</td>
                                    <td>{employe.date_embauche}</td>
                                    <td>{employe.post}</td>
                                    <td>{employe.admin.prenom} {employe.admin.nom}</td>

                                    <td>
                                        <Link to={`/administrative/view/${employe.id}`} className="btn btn-success mx-2">Voir</Link>
                                        <Link to={`/administrative/edit/${employe.id}`} className="btn btn-warning  mx-2" >Modifier</Link>
                                        <button onClick={() => handleDelete(employe.id)} className='btn btn-danger'>Supprimer</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

            </div>

            <Pagination
                employesPerPage={employesPerPage}
                totalEmployes={employeData.length}
                paginate={paginate}
                currentPage={currentPage}
            />
            {isSearching && (
                <Button className='rounded-2' onClick={handleReturnToList}>Revenir à la liste complète</Button>
            )}
        </div>
    )
}

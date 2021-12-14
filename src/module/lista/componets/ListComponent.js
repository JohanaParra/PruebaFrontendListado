
// React
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import '../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import './ListComponent.styles.css';

import { ListShape } from '../shape/ListShape';


function ListComponent( { list }) {
    const[item, setItem] = useState([]);
    const[tabla, setTabla] = useState([]);
    const[busca, setBusca] = useState("");
    const[buscaUser, setBuscaUser] = useState("");


    /*Función para setear la data para la búsqueda de Id y Título*/
    const handleChange =e=> {
        setBusca(e.target.value);
        buscaFiltro(e.target.value);
    }

    const buscaFiltro = (busquedaF) => {
        var resulItem = tabla.filter((itemLista)=>{
            if(itemLista.title.toString().toLowerCase().includes(busquedaF.toLowerCase())
                || itemLista.id.toString().includes(busquedaF) )
            {
                return itemLista;
            }
        });
        setItem(resulItem);
    }

    /*Función para setear la data para hacer la búsqueda de los userId*/
    const handleChangeUser =e=> {
        setBuscaUser(e.target.value);
        buscaFiltroUser(e.target.value);
    }

    const buscaFiltroUser = (busquedaF) => {
        var resulItem = tabla.filter((itemLista)=>{
            if(itemLista.userId.toString().includes(busquedaF))
            {
                return itemLista;
            }
        });
        setItem(resulItem);
    }

    useEffect(() => {
        setItem(list)
        setTabla(list)
    }, [list] )
    return(
       
        <div className="table-responsive">
            <h1 className="list-data">LISTA DE DATOS DEL API</h1>
            <label>Para buscar. Puede realizarla por Id, título o por UsuarioId</label>
            <div className="list-data__input">
                
                <input
                    className="form-control list-data__input__buscar"
                    value={busca}
                    placeholder="Buscar por título o por id"
                    onChange={handleChange}
                />
                <button className="btn btn-success">
                    <FontAwesomeIcon icon={faSearch}/>
                </button>

                <input
                    className="form-control list-data__input__buscar-user"
                    value={buscaUser}
                    placeholder="Buscar userid"
                    onChange={handleChangeUser}
                />
                <button className="btn btn-success">
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>

            <table className="table table-sm table-bordered">
                <thead>
                    <tr>
                        <th className="">Id</th>
                        <th className="">UsuarioId</th>
                        <th className="">Título</th>
                        <th className="">Estado</th>
                    </tr>
                </thead>
                <tbody>
                     { item &&
                        item?.map( (list_item) => 
                        
                            <tr key={ list_item.id}>
                                <td>{list_item.id}</td>
                                <td>{list_item.userId}</td>
                                <td>{list_item.title}</td>
                                <td>{list_item.completed ? list_item.completed ='true' : 'false'}</td>
                            </tr>
                        )
                }
                </tbody>
            </table>
            <h4>2021 Prueba Técnica Omaira Johana Parra S.</h4>    

        </div>
            
 
    )
}

ListComponent.propTypes = {
    list: PropTypes.arrayOf( PropTypes.shape( ListShape))
}

export default ListComponent;

import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap';
import { getDogs } from '../../mockRequests/perritos'
import NavigationBar from '../../components/Navigation';
import { withRouter } from 'react-router-dom'

const Adoptado = ({perrito, user, history}) => {

    useEffect(() => {
        if(!perrito.selectedPerrito || !user.authUser){
            history.push('/')
        }
    }, [perrito])

    const mockPerritoSeleccionado = getDogs()[0];
    return (
    <div className="container-fluid">
        <NavigationBar />
        <h3 className="mt-4">{`Felicidades ${user.authUser.fullName}, haz adoptado a ${perrito.selectedPerrito.nombre}`}</h3>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 mb-2">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={perrito.selectedPerrito.img} />
                            <Card.Body>
                                <Card.Title>{perrito.selectedPerrito.nombre}</Card.Title>
                                <Card.Text>
                                    <div>{`Genero: ${perrito.selectedPerrito.genero}`}</div>
                                    <div>{`Edad: ${perrito.selectedPerrito.edad}`}</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps = ({user, perrito}) => ({
    user, 
    perrito
})

export default withRouter(connect(mapStateToProps, null)(Adoptado));
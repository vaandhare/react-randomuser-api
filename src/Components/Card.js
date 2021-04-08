import React from 'react'
import {Card, CardBody, CardText, CardTitle} from 'reactstrap'
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from 'react-icons/fa'

const UserCard = ({details}) => {
    return(
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150" className="rounded-circle img-thumbnail border-danger" src={details.picture?.large}/>
            </CardBody>
            <CardTitle className="text-primary text-center">
                <h1>
                    <span className="pr-2">{details.name?.title}</span>
                    <span className="pr-2">{details.name?.first}</span>
                    <span>{details.name?.last}</span>
                </h1>
                <h5>
                    <span className="pr-2">[{details.registered?.age} years old]</span>
                </h5>
            </CardTitle>
            <CardText className="text-center">
                <FaMapMarkedAlt className="m-2"/> 
                {details.location?.city} , {details.location?.state} <br/>
                <FaPhone className="m-2"/> 
                {details.phone}
                <FaEnvelope className="m-2"/> 
                {details.email} 
            </CardText>
        </Card>
    )
}

export default UserCard;
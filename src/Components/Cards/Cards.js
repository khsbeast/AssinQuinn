import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.css';
import './Cards.css'
import moment from 'moment';
import StarRating from '../Helpers/Star/Star';
import Tag from '../Helpers/Tag/Tag';

//This component is responsible for card containing user data

function Cards({ ob, end }) {
    console.log(ob)

    // If the list is finished

    if (end === true) {
        return (<div>
            <Card style={{ width: '18rem', minHeight: '70vh' }}>
                <Card.Img variant="top" src="https://media.istockphoto.com/vectors/the-end-black-and-white-screen-background-movie-ending-screen-the-vector-id1152085853?k=20&m=1152085853&s=612x612&w=0&h=Epk5A1lMJV9L040hDkfrEv1IbCSeY9eWiTjitv8rwPw=" />
                <Card.Body>
                    <Card.Title>The End</Card.Title>
                    <Card.Text>
                        Thankyou for watching :D
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>);
    }
    else {
        let a = false;
        let b = false;
        let c = false;
        let d = false;
        let e = false;
        if (ob.typeofday) {
            for (let i = 0; i < ob.typeofday.length; i++) {
                if (ob.typeofday[i] === "hair cut")
                    a = true;
                if (ob.typeofday[i] === "protein treatment")
                    b = true;
                if (ob.typeofday[i] === "hair color")
                    c = true;
                if (ob.typeofday[i] === "deep conditioning")
                    d = true;
                if (ob.typeofday[i] === "clarifying")
                    e = true;
            }
        }
        //Variables to be displayed
        const title = JSON.stringify(ob.calendardatetime)
        const mon = title.slice(6, 8)
        var monthName = moment(mon, 'MM').format('MMMM');
        return (<div>
            <Card style={{ width: '18rem', minHeight: '70vh' }}>
                <Card.Img variant="top" className='img' src={ob.media[0].mediaurl} />
                <Card.Body>
                    <div className='hh' style={{ display: 'flex' }}>
                        <div style={{ marginRight: 'auto' }}>
                            <Tag a={a} b={b} c={c} d={d} e={e} />
                        </div>
                        <div style={{ alignSelf: 'self-start' }}><StarRating value={ob.rating} /> </div>
                    </div>
                    <Card.Title className='title'>{title.slice(9, 11)} {monthName}</Card.Title>
                    <Card.Text className="text">
                        {ob.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>);
    }
}

export default Cards;

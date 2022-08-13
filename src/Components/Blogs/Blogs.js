import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <Container>
            <Row className='p-3 mb-3' style={{border:'5px solid blue', borderRadius:'10px'}}>
                <Col>
                    <Image fluid style={{ height: '150px' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png'></Image>
                </Col>
                <Col>
                    <h1>HTML Blog</h1>
                    <h4>Know about Html</h4>
                    <Link to='/blogs/html'>
                        <Button>
                            View Details
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row className='p-3 mb-3' style={{border:'5px solid blue', borderRadius:'10px'}}>
                <Col>
                    <Image fluid style={{ height: '150px' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png'></Image>
                </Col>
                <Col>
                    <h1>CSS Blog</h1>
                    <h4>Know about CSS</h4>
                    <Link to='/blogs/css'>
                        <Button>
                            View Details
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row className='p-3 mb-3' style={{border:'5px solid blue', borderRadius:'10px'}}>
                <Col>
                    <Image fluid style={{ height: '150px' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png'></Image>
                </Col>
                <Col>
                    <h1>JavaScript Blog</h1>
                    <h4>Know about JavaScript</h4>
                    <Link to='/blogs/js'>
                        <Button>
                            View Details
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row className='p-3 mb-3' style={{border:'5px solid blue', borderRadius:'10px'}}>
                <Col>
                    <Image fluid style={{ height: '150px' }} src='https://www.pngfind.com/pngs/m/638-6386507_10-years-of-experience-react-native-logo-svg.png'></Image>
                </Col>
                <Col>
                    <h1>React Blog</h1>
                    <h4>Know about React</h4>
                    <Link to='/blogs/react'>
                        <Button>
                            View Details
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row className='p-3 mb-3' style={{border:'5px solid blue', borderRadius:'10px'}}>
                <Col>
                    <Image fluid style={{ height: '150px' }} src='https://jobsinsweden.se/wp-content/uploads/2020/09/backend-development.png'></Image>
                </Col>
                <Col>
                    <h1>React Blog</h1>
                    <h4>Know about React</h4>
                    <Link to='/blogs/backend'>
                        <Button>
                            View Details
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Blogs;
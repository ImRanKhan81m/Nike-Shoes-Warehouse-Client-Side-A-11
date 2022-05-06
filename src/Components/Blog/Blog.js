import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h1 className='pt-4'>This is Blog Page</h1>
            <Container>
                <Row>
                    <Col lg='2'></Col>
                    <Col lg='8'>
                        <div className='border p-4 text-start my-4 blog'>
                            <h5>1) Difference between JavaScript and NodeJs?</h5>
                            <h5>Answer:</h5>
                            <div>
                                <Table striped bordered hover >
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th className='text-center'>JavaScript</th>
                                            <th className='text-center'>NodeJs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Javascript is a programming language that is used for writing scripts on the website.</td>
                                            <td>NodeJS is a Javascript runtime environment.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Javascript can only be run in the browsers.</td>
                                            <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>It is basically used on the client-side.</td>
                                            <td>It is mostly used on the server-side.</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Javascript is capable enough to add HTML and play with the DOM. </td>
                                            <td>Nodejs does not have capability to add HTML tags.</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Javascript is used in frontend development.</td>
                                            <td>Nodejs is used in server-side development.</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className='border blog p-4 text-start  my-4'>
                            <h5>2) Difference between SQL and NoSQL D atabases? </h5>
                            <h5>Answer:</h5>
                            <div>
                                <Table striped bordered hover >
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th className='text-center'>SQL</th>
                                            <th className='text-center'>NoSQL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                            <td>Non-relational or distributed database system.</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>These databases have fixed or static or predefined schema.</td>
                                            <td>They have dynamic schema.</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>These databases are not suited for hierarchical data storage.</td>
                                            <td>These databases are best suited for hierarchical data storage.</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>These databases are best suited for complex queries.</td>
                                            <td>These databases are not so good for complex queries.</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Vertically Scalable.</td>
                                            <td>Horizontally scalable.</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className='border blog p-4 text-start  my-4'>
                            <h5>3) What is the purpose of jwt and how does it work?</h5>
                            <h5>Answer: </h5>
                            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization.</p>
                        </div>
                    </Col>
                    <Col lg='2'></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;
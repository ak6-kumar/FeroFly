import React,{Component} from 'react';
import './style.css';
import { Card,CardImg, Form, Label, Input, Row,Col, Button } from "reactstrap";
import  Img  from "../Capture.PNG";

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const FlexboxPage = () => (
            <div className="topmargin">
              <div className="d-flex flex-row-reverse">
                <div className="p-2"><span className="fa fa-facebook">S</span></div>
              </div>
              <div className="d-flex flex-row-reverse">
                <div className="p-2">Flex item 2</div>
              </div>
              <div className="d-flex flex-row-reverse">
                <div className="p-2">Flex item 3</div>
              </div>
            </div>
          );
        return(
            <React.Fragment>
        <div className="container">
            <div className="row aling-item-start">
                <div className="col-12 col-md mt-5">
                    <h1 >Ferofly</h1>      
                    <h5 >Magnify your Journey</h5>  
                    <Card className="mt-5">
                        <CardImg width="100%" src={Img} alt="photo"/>
                    </Card>
                    {<br/>}
                    <Form>
                <Row className="col-12 m-3">
                    <Col className="col-md-3  textRight">
                        <Label><small>Check In</small></Label>
                        <Input type="date"/>
                    </Col>
                    <Col className="col-md-3 textRight">
                        <Label><small>Check In</small></Label>
                        <Input type="date"/>
                    </Col>
                    <Col className="col-md-1  textRight">
                        <Label><small>Adults</small></Label>
                        <Input type="number" defaultValue="1" min="1"/>
                    </Col>
                    <Col className="col-md-1 textRight">
                        <Label><small>Kids</small></Label>
                        <Input type="number" defaultValue="1" min="0" defaultValue="0"/>
                    </Col>
                    <Col className="col-md-3  textRight">
                        <Button color="secondary" className="btn btn-default btn-block" >Search</Button>
                    </Col>
                </Row>
            </Form>
                </div>
            </div>
        </div>
        </React.Fragment>
        );
    }
}

export default Home;
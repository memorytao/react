import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
class HeadNavbar extends React.Component {

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="country" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                    {/* <Autocomplete
                        id="combo-box-demo"
                        options={}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                    /> */}
                </Navbar>
            </>
        )
    }

}
export default HeadNavbar;
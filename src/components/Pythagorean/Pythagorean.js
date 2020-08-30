import React from 'react';
import styled from 'styled-components'


const Button = styled.button `
border-radius: 3px;
background: blue;
color: white;
border: 2px;
margin: 0;
`;

const Form = styled.form `
height: 400px;
background: teal;
width: 300px;


`;

const Input = styled.input `
margin: 20px;
align-content: center;
`;

const Label = styled.label `
margin: 20px;
`

const P = styled.p `
text-align: center;
font-size: 30px;
width: 100%;

`;

const H1 = styled.h1 `
position: relative;
background: black;
text-align: justify;
color: white;
width: 100%;
`

const Div1 = styled.div `
text-align:center;
`
const Div2 = styled.div `
text-align:center;
`
const DivB = styled.div `
text-align: center;
`


class Pythagorean extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val1: 0,
      val2: 0,
      result: 0
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.thereom = this.thereom.bind(this);
  }
    handleChange1(e) {
      e.preventDefault();
      this.setState({
        val1: Number(e.target.value) });
      }
    handleChange2(e){
      e.preventDefault();
      this.setState({
        val2: Number(e.target.value)});
}

    thereom(e){
      e.preventDefault();
      let pySum = (this.state.val1 ** 2) + (this.state.val2 ** 2);
      let pySqrt = Math.sqrt(pySum).toFixed(2);
      this.setState({
        result: pySqrt
      })
    };



  render() {
    return (
      <h1>Hello world!</h1>
    <Form>
      <H1>Pythagorean Theoreom</H1>
      <Div1>
      <Label>A-value:</Label>
      <Input type="number" onChange={this.handleChange1} />
      </Div1>
      <br/>
      <Div2>
      <Label>B-value:</Label>
      <Input type="number" onChange={this.handleChange2} />
      </Div2>
      <DivB >
      <Button onClick={this.thereom}>Submit </Button>
      </DivB>
      <P>
        {this.state.val1 ? this.state.val1 : 'a'}<sup>2</sup> &nbsp;
         + &nbsp;
         {this.state.val2 ? this.state.val2 : 'b'}<sup>2</sup> &nbsp;
         = &nbsp;
        {this.state.result ? this.state.result : 'c'}<sup>2</sup>
      </P>
      </Form>
    )
  };
}


export default Pythagorean;

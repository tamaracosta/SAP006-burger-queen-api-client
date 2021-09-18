import { fireEvent, render } from '@testing-library/react';
import Button from '../src/components/button/Button';
import Input from '../src/components/input/Input';


// button 
test('click button in screen login', done => {
  function handleSubmit() {
    done();
}
  const { getByText } = render(
    <Button onClick={handleSubmit}>Entrar</Button>);
  const btnClick = getByText('Entrar');
  fireEvent.click(btnClick);
});

test('click button in screen register', done => {
  function handleSubmit() {
    done();
  }
  const { getByText } = render(
    <Button onClick={handleSubmit}>Cadastre-se</Button>);
  const btnRegister = getByText('Cadastre-se');
  fireEvent.click(btnRegister);
});

// input
test('selected attendant', done => {
  function handleChange(e) {
    jest.setTimeout(30000)
    expect(e.target.value).toEqual('atendente');
    done();
  }
  const { getByPlaceholderText } = render(
    <Input onChange={handleChange} placeholder="atendente" />);
  const iptAttendant = getByPlaceholderText('atendente');
  fireEvent.change(iptAttendant, { target: {value: "atendente"}});
});

test('selected cook', done => {
  function handleChange(e) {
    expect(e.target.value).toEqual('cozinheiro');
    done();
  }
  const { getByPlaceholderText } = render(
    <Input onChange={handleChange} placeholder="cozinheiro" />);
  const iptCook = getByPlaceholderText('cozinheiro');
  fireEvent.change(iptCook, { target: {value: "cozinheiro"}});
});








//test('renders learn react link', () => {
  //   render(<Input />);
  // const linkElement = screen.getByText(/aqui/i);
  // expect(linkElement).toBeInTheDocument();
  //   console.log(linkElement);
  // });
  
  // import { render, screen } from '@testing-library/react';
  // import Button from './components/button/Button';
  
  // describe('Button component', () => {
  //   describe('button render', () => {
  //     const label = 'voabebe'
  //     render(<Button> {label} </Button>);
  
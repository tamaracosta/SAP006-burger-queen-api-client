import { fireEvent, render, screen } from '@testing-library/react';
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

test('click button in screen register', () => {
  const handleSubmit = jest.fn()
  render(
    <Button onClick={handleSubmit}>Cadastre-se</Button>);
  expect(handleSubmit).toHaveBeenCalledTimes(0);
  fireEvent.click(screen.getByText(/Cadastre-se/i));
  expect(handleSubmit).toHaveBeenCalledTimes(1)
});

// input
test('selected attendant', done => {
  function handleChange(e) {
    expect(e.target.value).toEqual('atendente');
    done();
  }
  const { getByPlaceholderText } = render(
    <Input onChange={handleChange} placeholder="atendente" />);
  const iptAttendant = getByPlaceholderText('atendente');
  fireEvent.change(iptAttendant, { target: { value: "atendente" } });
});

test('selected cook', done => {
  function handleChange(e) {
    expect(e.target.value).toEqual('cozinheiro');
    done();
  }
  const { getByPlaceholderText } = render(
    <Input onChange={handleChange} placeholder="cozinheiro" />);
  const iptCook = getByPlaceholderText('cozinheiro');
  fireEvent.change(iptCook, { target: { value: "cozinheiro" } });
});


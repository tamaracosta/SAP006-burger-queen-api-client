import * as S from "./RadioStyle.js";


const Radio = (props) => {
  return (
    <S.Container>
      <S.Label><S.InputRadio type="radio" {...props} /> {props.text} </S.Label>
    </S.Container>
  );
};

export default Radio;


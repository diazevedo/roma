import * as S from "./styles";

const Form = ({ loading, disabled, success, error, children }) => {
  return (
    <S.CustomForm loading={loading} success={success} error={error}>
      <S.FieldsetCustom disabled={disabled}>{children}</S.FieldsetCustom>
    </S.CustomForm>
  );
};

export default Form;

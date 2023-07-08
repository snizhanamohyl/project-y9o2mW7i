import { NavLink } from 'react-router-dom';

export const BtnWrapper = styled.div`
  display: flex;
  gap: 12px;

@media screen and (min-width: 768px) {
  gap: 18px;
}
`;

export const SignUpBtn = styled.NavLink`
  font-size: 14px;
  line-height: 1.5;
  display: block;
  padding: 12px 24px;
  border-radius: 24px 44px;
  border: none;
  background-color: #8baa36;
  color: #fafafa;
  cursor: pointer;
}
&:hover, &:focus {
  background-color: #22252a;
}
@media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 22px 44px;
}
`;
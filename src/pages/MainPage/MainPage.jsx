import Hero from 'components/Hero/Hero';
import { logout } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

export default function MainPage() {
  const dispatch = useDispatch();

  return (
    <>
      <Hero />
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </>
  );
}

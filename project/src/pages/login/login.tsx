import {ChangeEvent, FormEvent, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {Link, useNavigate} from 'react-router-dom';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/data-type';
import {Url} from '../../const';
import cn from 'classnames';
import s from './login.module.scss';

const formFields = {
  email: 'E-mail',
  password: 'Password'
};

type FieldProps = {
  value: string;
  error: boolean;
  errorText: string;
  regExp: RegExp;
}

type FormStateProps = {
  [key: string]: FieldProps;
}

function Login() {
  const [formState, setFormState] = useState<FormStateProps>({
    email: {
      value: '',
      error: false,
      errorText: 'Неправильный E-mail',
      regExp: /^\S+@\S+\.\S+$/
    },
    password: {
      value: '',
      error: false,
      errorText: 'Неправильно введён пароль',
      regExp: /([0-9]{1,}[a-z]{1,})|([a-z]{1,}[0-9]{1,})/
    }
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    console.log('workSubmit');
    dispatch(loginAction(authData));
    navigate(Url.Main);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      login: formState.email.value,
      password: formState.password.value
    });
  };

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    const rule = formState[name].regExp;
    const isCorrectValue = rule.exec(value);

    setFormState({
      ...formState,
      [name]: {
        value: value,
        error: (isCorrectValue === null),
        errorText: `Неправильно введён ${name}`,
        regExp: rule
      }
    });
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                to={Url.Main}
                className="header__logo-link"
              >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={handleSubmit}
              className="login__form form"
              action="src/components/Login/Login#"
              method="post"
            >
              {
                Object.entries(formFields).map(([key, value]) => {
                  const isValid = formState[key].error;
                  const inputClasses = cn('login__input form__input', {
                    [s.formInputInvalid]: isValid
                  });

                  return (
                    <div style={{position: 'relative'}} className="login__input-wrapper form__input-wrapper" key={key}>
                      <label className="visually-hidden">{value}</label>
                      <input
                        className={inputClasses}
                        type={key}
                        name={key}
                        placeholder={value}
                        required
                        value={formState[key].value}
                        onChange={handleChange}
                      />
                      {
                        formState[key].error && <span style={{display: 'block', position: 'absolute', bottom: '0', fontSize: '13px', color: 'darkred'}}>{formState[key].errorText}</span>
                      }
                    </div>
                  );
                })
              }
              <button
                style={{marginTop: '20px'}}
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="src/components/Login/Login#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;

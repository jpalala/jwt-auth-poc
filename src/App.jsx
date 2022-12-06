import logo from './logo.svg';
import styles from './App.module.css';
import './styles';
import { useForm } from './validation';

const EMAILS = ['joe@palala.me', 'hey@kuyajoe.dev'];

function fetchUserName(name) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(EMAILS.indexOf(name) > -1), 200);
  });
}

function App() {
  const { validate, formSubmit, errors } = useForm({
    errorClass: "error-input"
  });
  const [fields, setFields] = createStore();
  const fn = (form) => {
    // form.submit()
    console.log("Done");
  };
  const userNameExists = async ({ value }) => {
    const exists = await fetchUserName(value);
    return exists && `${value} is already being used`;
  };
  return (
    <div class={styles.App}>
        <header class={styles.header}>
          <img src={logo} class={styles.logo} alt="logo" />
            Basic Solid Form
        </header>
        <div>
          <form use:formSubmit={fn}>
            <h1>Sign Up</h1>
            <div class="field-block">
            <input
            name="email"
            type="email"
            placeholder="Email"
            required
            use:validate={[userNameExists]}
          />
        {errors.email && <ErrorMessage error={errors.email} />}
          </div>
          <div class="field-block">
          <input
            type="password"
            name="password"
            placeholder="Password"
                required=""
                minlength="8"
              onInput={(e) => setFields("password", e.target.value)}
              use:validate
            />
              {errors.password && <ErrorMessage error={errors.password} />}
            </div>
          </form>
        </div>
      </div>
    );
  }

  export default App;

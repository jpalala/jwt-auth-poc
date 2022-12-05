import logo from './logo.svg';
import styles from './App.module.css';
import useForm from './validator';
function App() {
  const { validate, formSubmit, errors } = useForm({
    errorClass: "error-input"
  });

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
	  Learn Solid
</header>
<div>
		username: <input >
	</div>
    </div>
  );
}

export default App;

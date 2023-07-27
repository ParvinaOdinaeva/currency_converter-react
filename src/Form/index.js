import "./style.css";

const Form = () => (

    <form className="form" enctype="multipart/form-data">
      <fieldset className="form__fieldset">
      <legend className="form__legend">Currency converter</legend>
      <p>
        <label>
          <span className="form__label">Amount (PLN)*</span> 
          <input className="form__field" type="number" name="amount" step="any" placeholder="enter the amount" required pattern="0-9" autofocus/>
        </label>
      </p>
      <p>
      <label><span className="form__label">Currency*</span>
          <select className="form__field" name="initialCurrency" list="currenciesList" required>
          <option value=""></option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          </select>
      </label>
      </p>
      <p><strong><span className="form__result"> </span></strong></p>
      <p><button className="form__button">Convert</button></p>
      <p><button className="form__button" type="reset">Clear result</button></p>
      <p>* - required field</p>
    </fieldset>    
    </form>
    
);

export default Form;
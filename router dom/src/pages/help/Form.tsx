function Form() {
  return (
    <>
      <h1>Form</h1>
      <hr />
      <div className="form_container">
        <form>
          <label className="form-control">
            <span>Your email:</span>
            <input type="text" />
          </label>
          <label className="form-control">
            <span>Your email:</span>
            <textarea></textarea>
          </label>
          <button className="btn">Send</button>
        </form>
      </div>
    </>
  );
}

export default Form;

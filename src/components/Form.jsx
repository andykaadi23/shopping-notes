const Form = () => {
  return (
    <form className="add-form">
      <h3>Shopping Today</h3>
      <div>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="text" placeholder="nama barang..." />
        <button>Tambah</button>
      </div>
    </form>
  );
};
export default Form;

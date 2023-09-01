const Form = () => {
  const quantityNum = [...Array(10)].map((x, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form className="add-form">
      <div>
        <select>{quantityNum}</select>
        <input type="text" placeholder="nama barang..." />
        <button>Tambah</button>
      </div>
    </form>
  );
};
export default Form;

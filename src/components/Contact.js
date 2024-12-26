const Contact = () => {
  return (
    <div className="max-w-2xl m-auto">
      <h1 className="font-bold text-2xl text-center">Contact Us Page</h1>
      <form method="post" className=" flex flex-col align-middle">
        <input
          className="block py-3 px-6 my-4 border border-black shadow-lg rounded-sm"
          type="text"
          name="name"
          placeholder="name"
          id="name"
        />
        <input
          className="block py-3 px-6 my-4 border border-black shadow-lg rounded-sm"
          type="text"
          name="message"
          placeholder="message"
          id="message"
        />
        <button className="block bg-gray-700 text-white py-3 px-7 rounded-sm">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

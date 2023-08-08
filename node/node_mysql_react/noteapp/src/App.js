import { useEffect, useState } from "react";
import Createnote from "./component/Createnote";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Note from "./component/Note";
import axios from "axios";

function App() {

  const [data, setData] = useState([]);

  //for get data
  useEffect(() => {
    fetchData(); // Fetch data from the API when the component mounts
  }, []);
  const fetchData = () => {
    axios.get('http://localhost:5000/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  // for delete data
  const onDelete = (id) => {
    axios
      .delete(`http://localhost:5000/data/${id}`)
      .then(response => {
        console.log('Note deleted successfully:', response.data);
        // Assuming the response.data contains a success message or confirmation, you can use it here if needed.
        // Re-fetch the data after successful deletion to update the list
        fetchData();
      })
      .catch(error => console.error('Error deleting note:', error));
  };

  // for update 
  const onSave = () => {
    fetchData(); // Re-fetch data after a note has been updated
  };

  return (
    <div>
      <Header />
      <Footer />
      <Createnote fetchData={fetchData} />
      {data.map((val, index) => {
        return <Note
          key={val.id}
          id={val.id}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
          onSave={onSave}
        />
      })}
    </div>
  );
}

export default App;

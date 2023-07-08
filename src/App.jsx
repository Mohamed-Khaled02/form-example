import React, { useEffect, useState } from "react";
import axios from "axios";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";

function DataManagementComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://motazradwan.com/api/collections")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFormSubmit = (formData) => {
    axios
      .post("https://motazradwan.com/api/collections/add", formData)
      .then((response) => {
        console.log(response.data);
        fetchData(); // Update the data after successful submission
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (collectionId) => {
    setData((prevData) =>
      prevData.filter((item) => item.id !== collectionId)
    );
  };

  return (
    <div>
      <FormComponent onSubmit={handleFormSubmit} />
      <TableComponent data={data} onDelete={handleDelete}/>
    </div>
  );
}

export default DataManagementComponent;

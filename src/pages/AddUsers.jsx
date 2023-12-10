import "bootstrap/dist/css/bootstrap.min.css";
import AddUserForm from "../components/AddUserForm/AddUserForm";

const AddUsers = () => {
  return (
    <div style={{ paddingTop: "6rem" }}>
      <h1>Add Users</h1>
      <AddUserForm />
    </div>
  );
};

export default AddUsers;

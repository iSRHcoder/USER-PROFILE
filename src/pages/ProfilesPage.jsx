import { useParams } from "react-router-dom";
import Profiles from "../Components/Profiles/Profiles";

const ProfilesPage = () => {
  const { page = "1" } = useParams();
  return (
    <>
      <h1>User Profiles</h1>
      <Profiles page={page} />
    </>
  );
};

export default ProfilesPage;

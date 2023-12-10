/* eslint-disable react-refresh/only-export-components */
import { privatePageHoC } from "../hoc/privatePageHoC";

const SettingsPage = () => {
  return (
    <div style={{ paddingTop: "6rem" }}>
      <h1>Settings Page </h1>
    </div>
  );
};

export default privatePageHoC(SettingsPage);

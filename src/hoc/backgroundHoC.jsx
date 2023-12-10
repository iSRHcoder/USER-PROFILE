import { CARD_DEFAULT_BG_COLOR } from "../Constants";

export const backgroundHoC = (Component, bgColor = CARD_DEFAULT_BG_COLOR) => {
  //This is a new component
  const NewComponent = (props) => {
    return (
      <>
        <div
          className="mt-4 mb-4 d-inline-block m-3 text-black"
          style={{ backgroundColor: bgColor }}
        >
          <Component {...props} />
        </div>
      </>
    );
  };

  return NewComponent;
};

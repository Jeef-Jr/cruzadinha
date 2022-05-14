import "./style.css";

export const BtnLetra = (props) => {
  return (
    <>
      {props.status === true && (
        <input
          id="btnletra"
          maxLength={1}
          value={props.value}
          onChange={props.change}
          onKeyUp={props.onKeyUp}
          style={{
            backgroundColor: props.back,
            color: props.colors,
          }}
        />
      )}
      {props.status === false && (
        <div id="block-false">
          {props.number} {props.icon}
        </div>
      )}
    </>
  );
};

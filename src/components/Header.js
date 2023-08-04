import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <Button
          color={showAdd ? "red" : "black"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      </header>
    </>
  );
};

Header.defaultProps = {
  title: "Task List",
};

export default Header;

function Book(props) {
  const image = React.createElement(
    "img",
    { src: props.image, width: "100px", height: "100px" },
    null,
  );
  const title = React.createElement(
    "h2",
    { style: { color: "red" } },
    "Title:ReactJS",
  );
  const price = React.createElement(
    "h2",
    { style: { color: "blue" } },
    "Price:465/-",
  );
  const btn = React.createElement(
    "button",
    { style: { color: "green" } },
    "AddToCart",
  );
  const div = React.createElement("div", { className: "book" }, [
    image,
    title,
    price,
    btn,
  ]);
  return div;
}
const bookdata = [
  { image: "", title: "ReactJS", price: 465 },
  { image: "", title: "NodeJS", price: 571 },
  { image: "", title: "ExpressJS", price: 665 },
  { image: "", title: "ReactJS", price: 465 },
  { image: "", title: "NodeJS", price: 571 },
  { image: "", title: "ExpressJS", price: 665 },
];
function App() {
  const bookstore = bookdata.map((b) => {
    return Book(b);
  });
  return React.createElement("div", { className: "bookstore" }, [...bookstore]);
}
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(App());

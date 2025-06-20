export default function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function Header() {
  return <div className="to-do-header">Header</div>;
}

function Body() {
  return <div className="to-do-body">Body</div>;
}

function Footer() {
  return <div className="to-do-footer">Footer</div>;
}

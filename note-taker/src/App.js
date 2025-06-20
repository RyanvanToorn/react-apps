import "./common-styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1 className="font-style-italic"> Note-Taker 📝 </h1>
    </div>
  );
}

function Content() {
  const notes = notesData;
  //console.log(notes);
  return (
    <div className="content">
      <ul>
        {notes.map((note) => (
          <Note noteObj={note} key={note.id} />
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return <div className="footer"></div>;
}

function Note({ noteObj }) {
  console.log(noteObj);
  return (
    <li>
      <div className="note">
        <div className="note__title">
          <div className="title-container">
            <h3>{noteObj.title}</h3>
          </div>

          <div className="buttons-container">
            <button id="delete-button">❌</button>
            <button id="edit-button">📝</button>
            {noteObj.isExpanded ? (
              <button id="collapse-button">🔼</button>
            ) : (
              <button id="expand-button">🔽</button>
            )}
          </div>
        </div>
        {noteObj.isExpanded ? (
          <div>
            <div className="note__body">{noteObj.content}</div>
            <div className="note__footer">
              <p>
                Created On: {noteObj.createdOn} Modified On:{" "}
                {noteObj.modifiedOn}
              </p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </li>
  );
}

const notesData = [
  {
    id: 1,
    title: "Note 1",
    content: "this is the first of many notes to come",
    createdOn: "02 January 2025 14:48 UTC",
    modifiedOn: "02 January 2025 14:48 UTC",
    isExpanded: true,
  },
  {
    id: 2,
    title: "Note 2",
    content: "this is the second of many notes to come",
    createdOn: "10 February 2025 14:48 UTC",
    modifiedOn: "02 January 2025 14:48 UTC",
    isExpanded: true,
  },
  {
    id: 3,
    title: "Note 3",
    content: "this is the third of many notes to come",
    createdOn: "16 January 2025 14:48 UTC",
    modifiedOn: "02 January 2025 14:48 UTC",
    isExpanded: false,
  },
  {
    id: 4,
    title: "Note 4",
    content: "this is the third of many notes to come",
    createdOn: "16 January 2025 14:48 UTC",
    modifiedOn: "02 January 2025 14:48 UTC",
    isExpanded: false,
  },
  {
    id: 5,
    title: "Note 5",
    content: "this is the third of many notes to come",
    createdOn: "16 January 2025 14:48 UTC",
    modifiedOn: "02 January 2025 14:48 UTC",
    isExpanded: false,
  },
  {
    id: 6,
    title: "Note 6",
    content: "this is the third of many notes to come",
    createdOn: "16 January 2025 14:48 UTC",
    modifiedOn: "02 January 2025 14:48 UTC",
    isExpanded: false,
  },
];

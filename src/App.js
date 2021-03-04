import './App.css';

function App() {
  return (
    <div className="App">
     <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
      <span className="mdl-layout-title">Title</span>
      <div className="mdl-layout-spacer"></div>
      <nav className="mdl-navigation mdl-layout--large-screen-only">
        <a className="mdl-navigation__link" href="/some/valid/uri">Link</a>
        <a className="mdl-navigation__link" href="/some/valid/uri">Link</a>
        <a className="mdl-navigation__link" href="/some/valid/uri">Link</a>
        <a className="mdl-navigation__link" href="/some/valid/uri">Link</a>
      </nav>
    </div>
  </header>
    <main className="page-content">
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
        Add row
      </button>
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
        Add column
      </button>
      </main>
    </div>
  );
}

export default App;

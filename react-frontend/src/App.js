import './App.css';

function menu_click(){

}

function App() {
  return (
      <div className="App">
        <div className="Top-banner">
          <header className="App-header">
                  <button className="Dropdown-button" onClick={menu_click }>Nav</button>
        <h1 className="Homepage-title">
          Welcome to ULearn!
        </h1>
              </header>
          </div>
      <aside className = "Sidebar-nav">
              <p>Python Modules</p>
              <p>Java Modules</p>
              <p>C++ Modules</p>
              <p className="Credit">About</p>
      </aside>
      <section className="Mainpage-body">

              </section>
    </div>
  );
}

export default App;

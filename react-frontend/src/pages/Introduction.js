
export default function Introduction() {
  return (
    <div className="App">
      <div className="Top-banner">
        <header className="App-header">
          <h1 className="Homepage-title">HOMEPAGE</h1>
        </header>
      </div>
      <aside className="Sidebar-nav">
        <p><a href="/">Home</a></p>
        <p><a href="/introduction">Introduction</a></p>
        <p><a href="/python-modules">Python Modules</a></p>
        <p><a href="/java-modules">Java Modules</a></p>
        <p><a href="/cpp-modules">C++ Modules</a></p>
        <p className="Credit"><a href="/about">About</a></p>
      </aside>
      <section className="Mainpage-body">
        <h1 className="Section-header">What is ULearn?</h1>
        <p>ULearn is a web-based platform designed to offer personalized educational resources for individuals interested in programming. By leveraging advanced predictive algorithms, ULearn provides tailored learning materials that align with users' coding interests and proficiency levels.</p>
        <h2 className="Section-header">Features</h2>
        <ul>
          <li>Personalized content recommendations</li>
          <li>Progress tracking</li>
          <li>Wide range of programming languages and modules</li>
          <li>User-friendly interface</li>
        </ul>
        <h2 className="Section-header">How It Works</h2>
        <p>ULearn analyzes user data to understand their learning preferences and proficiency levels. Based on this analysis, it recommends the most relevant content to enhance learning efficiency and engagement.</p>
        <h2 className="Section-header">Get Started</h2>
        <p>To begin using ULearn, simply register for an account and start exploring our vast library of programming resources tailored just for you.</p>
      </section>
    </div>
  );
}

}

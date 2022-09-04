import "../Header/style.scss";

export function Header() {
  return (
    <header>
      <div className="logo">
        <h1 className="logo-title">
          AX<span>V</span>IL
        </h1>
      </div>
      <ul className="menu">
        <a href="...">
          <li className="list">About</li>
        </a>
        <a href="...">
          <li className="list">Shop</li>
        </a>
        <a href="...">
          <li className="list">Contact</li>
        </a>
        <a href="...">
          <li className="list">Review</li>
        </a>
      </ul>
    </header>
  );
}

import "../Header/style.scss";

export function Header() {
  return (
    <header>
      <div className="logo">
        <h1 className="logo-title">
          AX<span>V</span>IL
        </h1>
      </div>
      <nav>
        <ul>
          <a href="...">
            <li>About</li>
          </a>
          <a href="...">
            <li>Shop</li>
          </a>
          <a href="...">
            <li>Contact</li>
          </a>
          <a href="...">
            <li>Review</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

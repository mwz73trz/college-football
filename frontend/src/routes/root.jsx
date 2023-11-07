import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div id="sidebar">
        <h1>College Footbal Teams</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search teams"
              placeholder="Search"
              type="searc"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/teams/1`}>Team One</Link>
            </li>
            <li>
              <Link to={`/teams/2`}>Team Two</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
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
              <a href={`/teams/1`}>Team One</a>
            </li>
            <li>
              <a href={`/teams/2`}>Team Two</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}

export default Root;
import LinksConfig from "../config/Links.config.ts";

export default function IntroComponent(){

    const goToGitHub = () => {
        window.open(LinksConfig.GITHUB_REPO, '_blank', 'opener,referrer');
    };

    return (
    <section id="intro" className="wrapper style2 special">
      <header className="major">
        <h2>
          Simplicity + peace of mind
          <br />
          Because not everything needs to be complicated
        </h2>
      </header>
      <ul className="icons major">
        <li>
            <span className="icon solid fa-mobile zi-mobile2">
              <span className="label">Mobile</span>
              {/*<i className={'zi-mobile2'}></i>*/}
            </span>
        </li>
        <li>
            <span className="icon solid fa-paint-brush">
              <span className="label">Paint Brush</span>
            </span>
        </li>
        <li>
            <span className="icon solid fa-object-group">
              <span className="label">Object Group</span>
            </span>
        </li>
      </ul>
        <div>
            <button onClick={goToGitHub}>
                <i className={'zi-github'}></i> Check it out on GitHub
            </button>
        </div>
    </section>
  );
}

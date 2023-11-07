import { Form } from "react-router-dom";
import psuLogo from "../assets/images/penn-state-shield.jpg";

const Team = () => {

  const team = {
    college: "Penn State University",
    nickname: "Nittany Lions",
    logo: psuLogo,
    website: "https://gopsusports.com/sports/football",
    notes: "Some notes",
    favorite: true,
  }

  return (
    <div id="team">
      <div>
        <img
          key={team.logo}
          src={team.logo || null}
        />
      </div>

      <div>
        <h1>
          {team.college || team.nickname ? (
            <>
              {team.college} {team.nickname}
            </>
          ) : (
            <i>No Name</i>
          )} {" "}
          <Favorite team={team} />
        </h1>

        {team.website && (
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href={team.website}
            >
              {team.website}
            </a>
          </p>
        )}

        {team.notes && <p>{team.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ team }) {

  let favorite = team.favorite;

  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}

export default Team;
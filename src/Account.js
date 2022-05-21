import { useState } from "react";
import { supabase } from "./supabaseClient";

const Account = () => {
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);

  return (
    <div aria-live="polite">
      <form className="form-widget">
        <div>Email: {"whatever@gmail.com"}</div>
        <div>
          <label htmlFor="username">Name</label>
          <input
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="website">Preferences</label>
          <input
            id="website"
            type="url"
            value={website || ""}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div>
          <button className="button block primary">Update profile now</button>
        </div>
      </form>
      <button
        type="button"
        className="button block"
        onClick={() => supabase.auth.signOut()}
      >
        Sign Out!
      </button>
    </div>
  );
};

export default Account;

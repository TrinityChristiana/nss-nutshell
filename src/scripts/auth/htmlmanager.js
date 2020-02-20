//Kurt Krafft => makes modal html
const htmlManager = {
    createModalSignUpHtml:(obj) => {
      return `<div class="Kmodal-card">
      <div class="Kmodal-card-text-container">
        <form id="SignUp-form">
          <div class="x-icon"><i id="leave-modal" class="times icon"></i></div>
          <h1>Welcome to TwixBook!</h1>
          <h4>Please fill out this form to continue...</h4>
          <fieldset class="createForm">
            <label for="email-sign">Email: </label>
            <input id="email-input" name="email-sign" type="email"
            placeholder="..." required>
          </fieldset>
          <fieldset class="createForm">
            <label for="username-sign"  >Username: </label>
            <input
autocomplete="username"
              id="username-input"
              name="username-sign"
              type="text"
              placeholder="..."
              required
            >
          </fieldset>
          <fieldset class="createForm">
          <label for="password">Password: </label>
          <input name="password" type="password" autocomplete="new-password" id="password-input" placeholder="..." required>
          </fieldset>
          <fieldset class="createForm">
          <label for="confirm-password">Confirm Password: </label>
          <input type="password" autocomplete="new-password" name="confirm-password" id="confirm-password" placeholder="..." required>
        </fieldset>
          <fieldset class="createForm">
          <label for="profPic">Profile Picture URL: </label>
          <input type="text" name="profPic" id="profPic" placeholder="...">
        </fieldset>

          <button class ="ui secondary button" type="button" id="join-button">Join!</button>
        </form>
      </div>
    </div>`
    }
}
export default htmlManager;

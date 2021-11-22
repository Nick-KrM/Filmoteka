import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';
import registration from './registration';
import logIn from './logIn';

const testBox = basicLightbox;

//  registration form
document.querySelector('.btn-reg').onclick = () => {
  testBox
    .create(
      `
      <form class="login-block">
      <h2 class="login-block__title">Registration</h2>
      <input
        class="login-block__user-name"
        type="text"
        placeholder="Enter your name..."
        required

      />
      <input
        class="login-block__password"
        type="password"
        placeholder="Enter your password..."
        required
      />
      <div class="login-block__btn-block">
        <button class="login-block__registration btn-default">
          Registration
        </button>
      </div>
    </form>
  `,
      {
        onShow: testBox => {
          testBox
            .element()
            .querySelector('.login-block__registration').onclick =
            testBox.close;
        },
      },
    )
    .show();

  document
    .querySelector('.login-block')
    .addEventListener('submit', registration);
};

//  LOG IN form
document.querySelector('.btn-login').onclick = () => {
  testBox
    .create(
      `
      <form class="login-block">
      <h2 class="login-block__title">Log In</h2>
      <input
        class="login-block__user-name"
        type="text"
        placeholder="Enter your name..."
        required
        
      />
      <input
        class="login-block__password"
        type="password"
        placeholder="Enter your password..."
        required
      />
      <div class="login-block__btn-block">
        <button class="login-block__log-in btn-default">
          Log In
        </button>
      </div>
    </form>
  `,
      {
        onShow: testBox => {
          testBox.element().querySelector('.login-block__log-in').onclick =
            testBox.close;
        },
      },
    )
    .show();

  document.querySelector('.login-block').addEventListener('submit', logIn);
};

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  } else {
    return <h1>Hello, Stranger.</h1>;
  }
}

function getElement(elementNam) {
  return elementNam;
}

const divElement = <div tabIndex="0"></div>;
const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl: '%PUBLIC_URL%/favicon.ico',
};

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

//setInterval(tick, 1000);

function Welcome(props) {
  return <h1>Hello, {props.firstName} {props.lastName}</h1>;
}

function Time() {
  return <h2>It is {new Date().toLocaleTimeString()}.</h2>;
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: 'World',
      posts: [],
      comments: [],
    };
  }

  componentDidMount() {
    this.timerID  = setInterval(() => this.tick(), 1000);

    this.setState((props) => ({
      name:  props.name,
    }));

    // fetchPosts().then(response => {
    //   this.setState({
    //     posts: response.posts,
    //   });
    // });
    //
    // fetchComments().then(response => {
    //   this.setState({
    //     comments: response.comments,
    //   });
    // });
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        {/* <h2>It is {this.props.date.toLocaleTimeString()}.</h2> */}
        {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

function tick() {
  const element = (
    <div>
      <Welcome firstName="Sara" lastName="Jons" />
      <Comment date={comment.date} text={comment.text} author={comment.author} />
      <Time/>
      <Clock date={new Date()} />,
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function LoginStatus(props) {
  return (
    <p>The user is <b>{props.isLoggedIn ? 'currently' : 'not'}</b> logged in</p>
  );
}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      {props.message}
    </div>
  );
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  const name = <Welcome firstName={props.firstName} lastName={props.lastName} />;
  return (
    <div>
      {name}
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    alert('Called');
    console.log('this is:', this);
  };

  secendHandleClick() {
    alert('2nd Button Called');
    console.log('this is 2nd one:', this);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Click me for Alert & console
        </button>

        <button onClick={(e) => this.secendHandleClick(e)}>
          2nd Button
        </button>
      </div>
    );
  }
}

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false, showWarning: false };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning,
    }));

    //const numbers = [1, 2, 3, 4, 5];
    //const doubled = numbers.map((number) => number * 2);

    //console.log(doubled);
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    let message = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
      message = <LoginStatus isLoggedIn={isLoggedIn} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
      message = <LoginStatus isLoggedIn={isLoggedIn} />;
    }

    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((number) => number * 2);

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        {message}
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide Warning' : 'Show Warning'}
        </button>
        <WarningBanner warn={this.state.showWarning} message={message}  />
        <NumberList numbers={doubled}/>
      </div>
    );
  }
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      textarea: 'Please write an essay about your favorite DOM element.',
      select: 'mango',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const name = 'A name was submitted: ' + this.state.value;
    const textarea = '\nAn essay was submitted: ' + this.state.textarea;
    const select = '\nYour favorite flavor is: ' + this.state.select;
    alert(name + textarea + select);

    event.preventDefault();
  }

  handleChangeTextarea (event) {
    this.setState({ textarea: event.target.value });
  }

  handleChangeSelect (event) {
    this.setState({ select: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <br/>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Discription:
          <br/>
          <textarea value={this.state.textarea} onChange={this.handleChangeTextarea} />
        </label>
        <br/>
        <label>
          Pick your favorite La Croix flavor:
          <br/>
          <select value={this.state.select} onChange={this.handleChangeSelect}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function CurrentApp() {
  const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' },
  ];
  return (
    <div>
      <App />
      <Clock />
      <Toggle />
      <LoggingButton />
      <LoginControl />
      <Greeting isLoggedIn={true} />
      <Mailbox unreadMessages={messages} firstName="Rinku" lastName="Rock" />
      <Blog posts={posts} />
      <NameForm />
    </div>
  );
}

ReactDOM.render(
  <CurrentApp />,
  document.getElementById('root')
);

//setInterval(tick, 1000);

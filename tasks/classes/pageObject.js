/**
 * Organize a page object structure https://drive.google.com/file/d/1w3B4Z2ABy2AkacJFRlQosrYXwwv3jw_V/view
 */

class BasePage {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    get header() {
        return new Header('Header');
    }

    get footer() {
        return new Footer('Footer');
    }

    open(url) {
        return `${this.baseUrl}/${url}`;
    }
}

class LoginPage extends BasePage {
    constructor(baseUrl, header, footer) {
        super(baseUrl, header, footer);
        this.email = this.email_field;
        this.password = this.password_field;
        this.submitButton = this.submit_button;
    }

    get email_field() {
        return 'email field';
    }

    get password_field() {
        return 'password field';
    }

    get submit_button() {
        return 'submit button';
    }

    open() {
        return super.open('/loginUrl');
    }

    typeEmail(email) {
        return `Email ${email} has been typed into the ${this.email_field}.`;
    }

    typePassword(password) {
        return `Password ${password} has been typed into the ${this.password_field}.`;
    }

    clickSubmit() {
        return `The button ${this.submit_button} has been clicked.`;
    }
}

class Component {
    constructor(type) {
        this.type = type;
    }

    review() {
        return `${this.type} -> reviewed`;
    }
}

class Header extends Component {
    constructor(name) {
        super(name);
    }
}

class Footer extends Component {
    constructor(name) {
        super(name);
    }

    review() {
        return `${super.review()}`;
    }
}
// const myFooter = new Footer("footer");
// console.log(myFooter.review());

//const loginPage = new LoginPage();

module.exports = {
    BasePage,
    LoginPage
};
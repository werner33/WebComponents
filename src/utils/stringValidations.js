//validate email using strong email regex
function validateEmail(email) {
    const strongEmailRegex = new RegExp(
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
    );
    return strongEmailRegex.test(email);
}

//export validate email function
export { validateEmail };

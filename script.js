function submitForm() {
    var name = document.getElementById('name').value;
    var greetingElement = document.getElementById('greeting');
    
    if (name) {
        greetingElement.innerHTML = 'Hello, ' + name + '! Welcome to your first C++ web project.';
    } else {
        greetingElement.innerHTML = 'Please enter your name.';
    }
}

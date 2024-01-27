# C++ Web Project

This is a simple C++ web project that combines C++, HTML, and CSS. The project includes a basic C++ program that prompts the user to enter their name and displays a greeting message. The frontend of the project is implemented using HTML and styled with CSS.

## Getting Started

### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/download)
- C++ Compiler (e.g., [g++](https://gcc.gnu.org/))

### Set Up the Project

1. Clone or download this repository to your local machine.
2. Open Visual Studio Code and navigate to the project folder.

### C++ Code Explanation

```cpp
#include <iostream>
#include <string>

int main() {
    std::string name;

    std::cout << "Enter your name: ";
    std::getline(std::cin, name);

    std::cout << "Hello, " << name << "! Welcome to your first C++ web project." << std::endl;

    return 0;
}
```

1. **`#include <iostream>` and `#include <string>`:**
   These lines include two C++ standard libraries: `<iostream>` for input and output operations (like `cout` and `cin`), and `<string>` for working with strings.

2. **`int main()`:**
   Every C++ program must have a `main` function. It is the entry point of the program, and execution starts from here. The `int` before `main()` indicates that the function returns an integer value.

3. **`std::string name;`:**
   This line declares a variable named `name` of type `std::string`. `std::string` is a C++ class for handling strings. Here, it's used to store the user's name.

4. **`std::cout << "Enter your name: ";`:**
   `std::cout` is the standard output stream used to display information to the console. This line prints the message "Enter your name: " to the console.

5. **`std::getline(std::cin, name);`:**
   `std::getline` is a function that reads a line of text from the standard input (`std::cin`) and stores it in the variable `name`. It allows the user to input their name.

6. **`std::cout << "Hello, " << name << "! Welcome to your first C++ web project." << std::endl;`:**
   This line outputs a greeting message to the console using `std::cout`. It includes the user's entered name in the message.

7. **`return 0;`:**
   The `return` statement ends the `main` function. The value `0` is returned to the operating system, indicating that the program executed successfully.

**Summary:**
- `#include <iostream>` and `#include <string>` include necessary libraries.
- `int main()` is the starting point of the program.
- `std::string name;` declares a string variable.
- `std::cout` is used for output, and `std::cin` is used for input.
- `std::getline(std::cin, name);` captures a line of text from the user.
- `return 0;` indicates successful program execution.

This simple program prompts the user for their name, reads it, and then prints a personalized greeting. Understanding the basic structure and functions in this code will provide a solid foundation for further exploration in C++ programming.

### Running the C++ Program

1. Open the integrated terminal in Visual Studio Code.
2. Compile and run the C++ program using the following commands:

    ```bash
    g++ -o main main.cpp
    ./main
    ```

   Enter your name when prompted to see the greeting message.

### Viewing the Web Page

1. Open `index.html` in your web browser. You can right-click on the file and select "Open with Live Server" if you have the Live Server extension installed in Visual Studio Code.

2. Enter your name in the input field, click the "Submit" button, and see the greeting message dynamically displayed on the web page.

## Project Structure

- `main.cpp`: C++ source code for user input and greeting.
- `index.html`: HTML file for the web page structure.
- `style.css`: CSS file for styling the web page.
- `script.js`: JavaScript file for handling user interactions on the web page.

## Learn More

- [C++ Programming](https://www.cplusplus.com/doc/tutorial/)
- [HTML Tutorial](https://www.w3schools.com/html/)
- [CSS Tutorial](https://www.w3schools.com/css/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
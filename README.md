# Local and Session Storage Component in React

## Overview
This React component demonstrates how to use both **local storage** and **session storage** in a single application. It showcases how to persist data across sessions using local storage and how to handle temporary storage using session storage.



## Table of Contents

- [Description](#description)
- [Features](#features)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [How to Run](#how-to-run)

### Features:
1. **Counter (Local Storage)**:
   - A simple counter that saves its value in the browser's local storage.
   - The counter persists even after the tab or browser is closed and reopened, ensuring the user sees the last saved value.

2. **Email & Password Form (Session Storage)**:
   - Input fields for email and password are saved in session storage.
   - The values persist during the active browser session but are cleared once the tab is closed and reopened, ensuring the temporary storage of sensitive information.## Usage

1. **Counter**: 
   - Click the "Increase" or "Decrease" button to change the counter value. 
   - The counter value will persist even if you close the tab and reopen it.

2. **Email & Password Form**: 
   - Enter an email and password in the input fields and click "Save to Session Storage."
   - The values will be stored during the current session but cleared after the tab is closed and reopened.
## Technologies Used

- **React**: For building the user interface and managing the state of components.
- **JavaScript (ES6+)**: Core language used for functionality and logic.
- **Vite**: Fast development build tool for modern web projects.
- **CSS**: For styling the application and ensuring responsive design.
- **HTML5**: For the basic structure of the app.## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/repository-name.git
    ```
2. Navigate to the project directory:
    ```bash
    cd repository-name
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the application:
    ```bash
    npm start
    ```

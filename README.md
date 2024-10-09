# Meme Generator - React Project

Welcome to the **Meme Generator**, a simple yet fun web application built entirely with **React**. This project serves as a practical exercise for developers who want to practice their React skills by creating a meme generator from scratch. You can load images, add custom text, and generate memes on the fly!

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The **Meme Generator** is designed for developers to enhance their understanding of React's core concepts like component-based architecture, state management, props, event handling, and API integration.

This project fetches random meme images using an external API and allows users to overlay custom text, positioning it both at the top and bottom of the image. It's a great way to practice handling forms, user input, and dynamically updating the UI with React.

## Features

- Fetch random meme images from an external API.
- Add custom top and bottom text to the meme.
- Generate and display memes dynamically.
- Responsive design for seamless user experience across devices.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **CSS**: Styling for layout and design.
- **JavaScript (ES6+)**: For app logic and interactivity.
- **External API**: Used to fetch random meme images.

## Setup and Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/meme-generator.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd meme-generator
   ```

3. **Install dependencies**:
   Ensure you have Node.js installed, then run:

   ```bash
   npm install
   ```

4. **Start the development server**:
   Run the command below to start the development server and view the app:
   ```bash
   npm start
   ```
   The app should open in your default browser at `http://localhost:5173`.

### Key Files:

- **App.js**: The root component that renders the entire app.
- **MemeGenerator.js**: Contains the logic for fetching meme images, handling user input, and rendering the meme.
- **memeData.js**: This file could be used to store static meme data or for fallback purposes if the API is not available.

## Usage

1. On page load, a random meme image will be fetched and displayed.
2. Users can enter text in the "Top text" and "Bottom text" input fields to overlay the meme.
3. After entering the text, the meme image will update with the custom text displayed.
4. To generate a new meme, click the "Generate Meme" button, which will fetch another random image from the API.

### Example:

- Open the app.
- Type "When you code all night" in the top text box.
- Type "But it still doesn't work!" in the bottom text box.
- Click on "Generate Meme" to get a random image with your custom meme text.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add a new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Submit a pull request.

---

Happy Coding! 🚀

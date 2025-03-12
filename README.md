# React Application for Formula1 project 🏎️

This is the frontend part of the Formula1 project, built using React, Javascript and TypeScript. The app allows users to interact with different pages. The backend is powered by C# and .NET (https://github.com/annabelleraaberg/Formula1API.git).

## Setup

1. Install the required dependencies:
   ```bash
   npm install

2. If running backend at the same time:
   ```bash
   dotnet run

   dotnet watch

3. Run frontend app:
   ```bash
   npm run dev
**Note**: press O to open in browser.

## Features
* **Home Page**
   * **Show Driver Page**: Displays information about drivers. It contains a search interface where users can search for drivers either by their ID or their name.
* **Search page**: UI for searching for a driver by name from a list of drivers.
   * Displays list of drivers with their details. 
* **Edit Driver Page**: Admin interface for managing drivers.
   * Add driver: name, age, nationality, image. 
   * Edit driver
   * Delete driver
   * List of all drivers
* **Game Page**: Quiz to test knowledge of Formula 1 drivers.
   * Randomized order
   * Multi-choice options
   * Questions about ranking, age and nationality

## Tech Stack
* React
* JavaScript/TypeScript
* Bootstrap
* Axios

### Architecture
* MVC architecture

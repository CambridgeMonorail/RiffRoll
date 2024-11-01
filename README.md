# RiffRoll

![Project Status](https://img.shields.io/badge/status-alpha-orange?style=for-the-badge)![Version](https://img.shields.io/github/package-json/v/CambridgeMonorail/RiffRoll?style=for-the-badge)![Build Status](https://img.shields.io/github/actions/workflow/status/CambridgeMonorail/RiffRoll/ci.yml?style=for-the-badge)
![License](https://img.shields.io/github/license/CambridgeMonorail/RiffRoll?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/CambridgeMonorail/RiffRoll?style=for-the-badge)

RiffRoll is an interactive guitar practice app that combines an animated fretboard with a customizable metronome to create a dynamic, engaging practice experience. Guitarists can follow along with chord progressions, see finger positions for scales or triads, and control tempo to match their practice needs. Built with React and managed as a monorepo, RiffRoll is designed for scalability and easy collaboration.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Documentation](#documentation)
6. [Contributing](#contributing)
7. [License](#license)
8. [Credits](#credits)

---

## Overview

RiffRoll is currently in its pre-beta stage and is under active development. This means that the project is still evolving, and new features, improvements, and bug fixes are being added regularly. While we strive to maintain stability, you may encounter some issues or incomplete features as we work towards the first official release.

We appreciate your interest and contributions to the project. Your feedback and participation are invaluable in helping us shape RiffRoll into a robust and user-friendly guitar practice app.

## Features

- **Animated Fretboard**: A real-time scrolling fretboard displays finger positioning for each note in sync with chord changes, helping users visualize finger placement.
- **Customizable Metronome**: A built-in metronome that users can set to different BPMs for tempo control, perfect for timed practice.
- **Practice Controls**: Users have full control with start, stop, and pause options, plus BPM adjustment to match practice goals.
- **Responsive Design**: The app is built with responsiveness in mind, functioning consistently across web and mobile devices.

## Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Nx](https://img.shields.io/badge/Nx-143055?style=for-the-badge&logo=nx&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

## Installation

### Prerequisites

- **Node.js** (version 14.x or higher)
- **Nx CLI**: For development ease, install globally:

  ```bash
  npm install -g nx
  ```

### Setup

1. Clone the Repository:

  ```bash
git clone <https://github.com/your-username/RiffRoll.git>
cd RiffRoll
  ```

2. Install Dependencies:

  ```bash
npm install
  ```

3. Start Development Server:

  ```bash
nx serve
  ```

## Documentation

For more detailed information about the project, please refer to the following documents:

- [Requirements](https://github.com/CambridgeMonorail/RiffRoll/tree/main/docs/requirements.md): This document outlines the functional and non-functional requirements of the RiffRoll project. It provides a comprehensive list of features, user stories, and technical constraints that guide the development process.

- [Technical Specification](https://github.com/CambridgeMonorail/RiffRoll/tree/main/docs/tech-spec.md): This document provides an in-depth technical overview of the RiffRoll project. It includes details about the architecture, core components, state management, styling, event handling, and additional utilities. It serves as a guide for developers to understand the inner workings of the project and contribute effectively.

## Usage

After setting up, you can use RiffRoll by:

1. Launching the development server.
2. Selecting a chord progression and desired BPM.
3. Using the Start, Stop, and Pause controls to practice with the animated fretboard and metronome sound.
4. Adjusting tempo as needed to increase or decrease practice intensity.

Example: For beginners, start with a slower BPM (e.g., 60) to focus on finger positioning, then gradually increase the tempo as you get comfortable.

## Contributing

We welcome contributions to RiffRoll! To get started:

1. Set up your local environment by following the installation steps.
2. Make your changes in a new branch.
3. Submit a pull request targeting the development branch.

See [CONTRIBUTING.md](https://github.com/CambridgeMonorail/RiffRoll/tree/main/docs/CONTRIBUTING.md)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

Special thanks to the contributors who have helped make RiffRoll possible.

# RiffRoll - Technical Specification

## Table of Contents

1. [Project Overview](#project-overview)
2. [Directory Structure and Code Organization](#directory-structure-and-code-organization)
3. [Core Components](#core-components)
   - [Home Screen](#1-home-screen)
   - [Practice Screen](#2-practice-screen)
   - [Fretboard Animation](#3-fretboard-animation)
   - [Metronome](#4-metronome)
   - [Session Controls](#5-session-controls)
4. [State Management](#state-management)
5. [Styling and Responsiveness](#styling-and-responsiveness)
6. [Event Handling and Interactivity](#event-handling-and-interactivity)
7. [Additional Utilities and Scripts](#additional-utilities-and-scripts)
   - [Dependency Graph and CI Optimization](#dependency-graph-and-ci-optimization)
   - [Formatting and Linting](#formatting-and-linting)
8. [Testing](#testing)
9. [Future Enhancements](#future-enhancements)
10. [Example Acceptance Criteria](#example-acceptance-criteria)

---

## Project Overview

RiffRoll is an interactive React-based guitar practice app designed to help guitarists develop timing, finger positioning, and scale knowledge. The app features a scrolling fretboard synchronized with a customizable metronome, displaying chord progressions, scale patterns, and finger positions in real-time.

---

## Directory Structure and Code Organization

Given the Nx monorepo setup, the project will be structured as follows:

```plaintext
riffroll/
├── apps/
│   └── riffroll-app/   # Main React application
├── libs/
│   ├── ui/             # Shared UI components (e.g., buttons, sliders)
│   ├── fretboard/      # Fretboard animations and components
│   ├── metronome/      # Metronome logic and components
│   └── controls/       # Start, stop, pause controls, etc.
└── nx.json             # Nx workspace configuration
```

---

## Core Components

### 1. Home Screen

- **Component**: `HomeScreen`
- **Description**: Entry point for users to configure and start a practice session.
- **Key Elements**:
  - **Session Configuration**: Options to select or create a practice session with chord progressions and tempos.
  - **Navigation**: Button to enter the Practice screen.
  - **Initial Settings**: Default values for session options (e.g., default tempo).

### 2. Practice Screen

- **Component**: `PracticeScreen`
- **Description**: Main practice interface displaying the fretboard, controls, and metronome.
- **Key Elements**:
  - **FretboardDisplay**: Shows animated fretboard with note markers and finger positions.
  - **ControlPanel**: Start, stop, and pause buttons for managing the session.
  - **MetronomeControls**: Tempo slider, volume control, and visual metronome.
  - **Settings Panel**: Quick-access settings for sound, tempo, and visuals.

### 3. Fretboard Animation

- **Library**: `libs/fretboard/`
- **Components**:
  - `FretboardDisplay`: Main animated component displaying the fretboard with finger positions and note names.
  - `NoteMarker`: Individual note markers to indicate the position for each note.
- **Key Features**:
  - **Scrolling Animation**: Smooth horizontal scroll in sync with BPM.
  - **Real-Time Updates**: Display the current note with visual cues for upcoming notes.
- **Libraries**: `GSAP` or `react-spring` for animation.
- **Edge Cases**: Handling for changes in BPM mid-session or adjusting playback speed dynamically.

### 4. Metronome

- **Library**: `libs/metronome/`
- **Components**:
  - `Metronome`: Handles timing and sound playback.
  - `MetronomeDisplay`: Visual metronome component synchronized with audio.
- **Features**:
  - **Adjustable Tempo**: BPM slider for tempo control (range: 40–200 BPM).
  - **Sound Options**: Multiple sound choices (click, tap, custom).
  - **Integration**: Smooth transition when adjusting BPM in real-time.
- **Libraries**: `Tone.js` for audio timing.

### 5. Session Controls

- **Library**: `libs/controls/`
- **Components**:
  - `ControlPanel`: Provides start, stop, and pause buttons for the session.
  - `TempoControl`: Allows users to adjust the BPM.
- **Features**:
  - **Session State Management**: Manages play/pause/stop states.
  - **Volume Control**: Adjusts metronome volume.
  - **Display**: Current state indication (e.g., icon change for play vs pause).
- **State Management**: Context API or Zustand for session state persistence.
- **Detailed Implementation**:
  - **ControlPanel Component**:
    - **Props**:
      - `onStart`: Function to handle the start action.
      - `onStop`: Function to handle the stop action.
      - `onPause`: Function to handle the pause action.
      - `isPlaying`: Boolean indicating if the session is currently playing.
    - **State**:
      - Local state to manage button states (e.g., active/inactive).
    - **UI Elements**:
      - Start Button: Triggers the `onStart` function.
      - Stop Button: Triggers the `onStop` function.
      - Pause Button: Triggers the `onPause` function.
      - Icons or labels to indicate the current state (e.g., play icon when paused).
    - **Styling**:
      - Use Tailwind CSS for responsive design.
      - Ensure buttons are accessible and have clear visual states (e.g., active, disabled).
    - **Event Handling**:
      - Attach event handlers to buttons for start, stop, and pause actions.
      - Update button states based on the `isPlaying` prop.
    - **Accessibility**:
      - Include keyboard shortcuts for controlling the session (e.g., space for play/pause).
      - Ensure buttons are focusable and have appropriate ARIA labels.

---

## State Management

### Global State

- **Session Settings**: Tempo, selected chord progression, and playback status.
- **Volume and Sound Preferences**: User preferences for volume and metronome sounds.

### Local State

- **Component-Specific State**: Animation controls within `FretboardDisplay` and tempo adjustments in `TempoControl`.

---

## Styling and Responsiveness

- **Library**: Tailwind CSS for a responsive, mobile-first design.
- **Theme**: Light/dark mode with design tokens for consistent theming.
- **Component Layout**: Components will use responsive units to adjust for screen size and orientation to ensure consistent UX across devices.

---

## Event Handling and Interactivity

- **User Interactions**:
  - Start, Stop, and Pause buttons to control the session.
  - BPM slider and volume control in real-time.
- **Edge Cases**: Smooth resuming after pause and handling abrupt tempo changes.
- **Keyboard Shortcuts**: Enable shortcuts (e.g., space for play/pause) to enhance accessibility.

---

## Additional Utilities and Scripts

### Dependency Graph and CI Optimization

- **Script**: `"dep-graph": "nx dep-graph"` - Generates the dependency graph.
- **Affected Scripts**: `"affected:build"`, `"affected:lint"`, `"affected:test"` to streamline CI/CD.

### Formatting and Linting

- **Linting**: `"lint": "nx lint"`, with additional commands for affected linting.
- **Prettier**: `"format": "nx format:write"` - Ensures consistent code style.

---

## Testing

### Unit Testing

- **Tools**: Jest for unit tests.
- **Coverage**: Core components, including fretboard, metronome, and control interactions.

### End-to-End Testing

- **Tools**: Cypress for end-to-end testing.
- **Scenarios**: Testing of user flow, e.g., configuring and starting a session, adjusting tempo, and handling play/pause transitions.

### Integration Testing

- **Purpose**: Ensure compatibility between fretboard animations and metronome sync.

---

## Future Enhancements

- **Loop Functionality**: Add ability to loop sections of the chord progression.
- **Progress Tracking**: Save and display user progress over time.
- **Custom Practice Modes**: Allow users to select specific scales and modes.

---

## Example Acceptance Criteria

- Fretboard scrolls in sync with selected BPM.
- Metronome sound plays in sync with the fretboard.
- Components respond smoothly to Start, Stop, and Pause commands.
- **Responsiveness**: App adjusts seamlessly across mobile and desktop views.
- **User Settings Persistence**: Remembers last used settings upon restart.

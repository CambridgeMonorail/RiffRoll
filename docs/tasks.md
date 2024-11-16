# RiffRoll - Tasks

## 2. Core Components Development

### Practice Screen

- [ ] Implement `PracticeScreen` component.
  - [ ] Create the layout for the `PracticeScreen` to include key areas (fretboard, controls, settings).
  - [ ] Integrate `FretboardDisplay` for animated fretboard functionality.
  - [ ] Integrate `ControlPanel` for Start, Stop, and Pause functionality.
  - [ ] Integrate `MetronomeControls` for tempo slider, volume, and visual metronome.
  - [ ] Add `Settings Panel` for quick access to sound, tempo, and visuals.
  - [ ] Implement visual indicators for upcoming chords and notes.
  - [ ] Ensure responsive design to adapt `PracticeScreen` to various screen sizes.
  - [ ] Test interactions between components to ensure synchronization and usability.

### Fretboard Display

- [ ] Develop `FretboardDisplay` component.
  - [ ] Define props: `chordProgression`, `tempo`, `onNotePlayed`, `onEnd`.
  - [ ] Create a visual representation of the fretboard with strings and frets.
  - [ ] Implement smooth horizontal scrolling using `GSAP` or `react-spring`.
  - [ ] Add features:
    - [ ] `NoteMarker` components to display finger positions.
    - [ ] Preview upcoming notes in the chord progression.
    - [ ] Highlight currently played notes and display note names or tabs.
  - [ ] Handle edge cases:
    - [ ] Adjust scrolling speed dynamically based on `tempo`.
    - [ ] Pause/resume scrolling based on session state (`isPlaying`).
    - [ ] Support tempo changes mid-session.
  - [ ] Style the fretboard using Tailwind CSS for responsiveness and accessibility.
  - [ ] Write unit tests to validate functionality.

### Metronome

- [ ] Implement `Metronome` component for timing and sound playback.
  - [ ] Set up `Tone.js` for sound generation and global timing.
    - [ ] Use `Tone.Transport` for synchronization.
    - [ ] Create a `Tone.Player` for metronome ticks.
  - [ ] Define props: `tempo`, `isPlaying`, `onTick`.
    - [ ] Implement `onTick` to communicate beat and timing data.
  - [ ] Handle controls:
    - [ ] Start, stop, and pause the metronome using `Tone.Transport`.
    - [ ] Adjust to dynamic tempo changes without disrupting timing.
  - [ ] Provide state updates via a global store or custom hook.
    - [ ] Share current beat, time, and playing state.
  - [ ] Add customization:
    - [ ] Support predefined and custom click sounds.
    - [ ] Add volume control via a `volume` prop.
  - [ ] Style visual indicators using Tailwind CSS.
    - [ ] Sync beat visualization (e.g., flashing dots) with ticks.
  - [ ] Add accessibility:
    - [ ] ARIA labels for controls.
    - [ ] Keyboard shortcuts for toggling start/stop and adjusting tempo.
  - [ ] Write unit tests for tick generation, synchronization, and sound playback.

- [ ] Create `MetronomeDisplay` for synchronized visual metronome.
  - [ ] Design and implement beat indicators (e.g., flashing dots or bars).
  - [ ] Sync visual indicators with the metronome ticks.
  - [ ] Ensure responsiveness and accessibility in the design.

### Session Controls

- [ ] Implement `ControlPanel` for session controls.
  - [ ] Define props: `onStart`, `onStop`, `onPause`, `isPlaying`.
  - [ ] Add buttons for Start, Stop, and Pause actions.
  - [ ] Attach event handlers and update button states based on `isPlaying`.
  - [ ] Style buttons using Tailwind CSS with icons/labels.
  - [ ] Ensure accessibility with keyboard shortcuts and ARIA labels.
- [ ] Add `TempoControl` slider for adjusting tempo.
  - [ ] Define props: `tempo`, `onTempoChange`.
  - [ ] Implement a range slider for BPM adjustments (40–200 range).
  - [ ] Test responsiveness and ensure updates trigger metronome adjustments.
- [ ] Include volume control for metronome.
  - [ ] Add props: `volume`, `onVolumeChange`.
  - [ ] Implement a volume slider with real-time audio adjustments.
- [ ] Add status indicators (e.g., play/pause icons).
  - [ ] Define props: `isPlaying`.
  - [ ] Update icons dynamically based on the current session state.

## 3. State Management

- [ ] Configure global state using Zustand.
  - [ ] Install and set up Zustand library.
  - [ ] Create a Zustand store for session state.
  - [ ] Define state variables: `isPlaying`, `tempo`, `volume`, `chordProgression`.
  - [ ] Implement actions: `startSession`, `stopSession`, `pauseSession`, `setTempo`, `setVolume`.
  - [ ] Integrate Zustand store with components (e.g., `ControlPanel`, `Metronome`).

## 4. Styling and Responsiveness

- [ ] Integrate Tailwind CSS for responsive design.
  - [ ] Configure utility classes for key components.
  - [ ] Test layouts on mobile, tablet, and desktop screens.
- [ ] Configure light/dark mode with design tokens.
  - [ ] Add support for user preference detection.
  - [ ] Test color contrast for accessibility.
- [ ] Test accessibility features, such as font size adjustments and contrast settings.

## 5. Event Handling and Interactivity

- [ ] Implement real-time BPM and volume adjustments.
  - [ ] Sync changes to metronome and fretboard.
- [ ] Handle edge cases like pause/resume and abrupt tempo changes.
- [ ] Allow users to toggle between scales, triads, and arpeggios.
- [ ] Add keyboard shortcuts for core functionality.

## 6. Additional Utilities and Scripts

- [ ] Add `nx dep-graph` script for dependency visualization.
- [ ] Configure CI/CD scripts for build, lint, and test (`affected:build`, `affected:lint`, `affected:test`).
- [ ] Set up linting and formatting tools (`nx lint`, `nx format:write`).

## 7. Testing

- [ ] Set up Jest for unit testing.
  - [ ] Write tests for fretboard, metronome, and controls.
- [ ] Set up Cypress for E2E testing.
  - [ ] Define test scenarios for session configuration, start/stop, and tempo adjustment.
- [ ] Validate synchronization between fretboard animation and metronome.

## 8. Future Enhancements

- [ ] Add loop functionality for targeted practice sections.
- [ ] Log and display user progress.
- [ ] Enable custom practice modes (e.g., scale selection).
- [ ] Allow saving and loading of custom practice sessions.

## 9. Final Acceptance Testing

- [ ] Verify that:
  - [ ] Fretboard scrolls in sync with BPM.
  - [ ] Metronome sound aligns with fretboard animation.
  - [ ] Start, Stop, and Pause controls respond smoothly.
  - [ ] Layout is responsive on mobile and desktop.
  - [ ] User settings persist between sessions.
  - [ ] Visual indicators for upcoming notes function correctly.
  - [ ] Accessibility requirements are met.

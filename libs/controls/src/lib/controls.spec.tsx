import { render, fireEvent } from '@testing-library/react';
import ControlPanel from './controls';

describe('ControlPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ControlPanel onStart={() => {}} onStop={() => {}} onPause={() => {}} isPlaying={false} />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a Start button', () => {
    const { getByLabelText } = render(<ControlPanel onStart={() => {}} onStop={() => {}} onPause={() => {}} isPlaying={false} />);
    expect(getByLabelText('Start')).toBeTruthy();
  });

  it('should have a Stop button', () => {
    const { getByLabelText } = render(<ControlPanel onStart={() => {}} onStop={() => {}} onPause={() => {}} isPlaying={false} />);
    expect(getByLabelText('Stop')).toBeTruthy();
  });

  it('should have a Pause button', () => {
    const { getByLabelText } = render(<ControlPanel onStart={() => {}} onStop={() => {}} onPause={() => {}} isPlaying={false} />);
    expect(getByLabelText('Pause')).toBeTruthy();
  });

  it('should call onStart when Start button is clicked', () => {
    const onStart = jest.fn();
    const { getByLabelText } = render(<ControlPanel onStart={onStart} onStop={() => {}} onPause={() => {}} isPlaying={false} />);
    fireEvent.click(getByLabelText('Start'));
    expect(onStart).toHaveBeenCalled();
  });

  it('should call onStop when Stop button is clicked', () => {
    const onStop = jest.fn();
    const { getByLabelText } = render(<ControlPanel onStart={() => {}} onStop={onStop} onPause={() => {}} isPlaying={false} />);
    fireEvent.click(getByLabelText('Stop'));
    expect(onStop).toHaveBeenCalled();
  });

  it('should call onPause when Pause button is clicked', () => {
    const onPause = jest.fn();
    const { getByLabelText } = render(<ControlPanel onStart={() => {}} onStop={() => {}} onPause={onPause} isPlaying={true} />);
    fireEvent.click(getByLabelText('Pause'));
    expect(onPause).toHaveBeenCalled();
  });

  it('should disable Start button when isPlaying is true', () => {
    const { getByLabelText } = render(<ControlPanel onStart={() => {}} onStop={() => {}} onPause={() => {}} isPlaying={true} />);
    expect(getByLabelText('Start')).toBeDisabled();
  });

  it('should disable Pause button when isPlaying is false', () => {
    const { getByLabelText } = render(<ControlPanel onStart={() => {}} onStop={() => {}} onPause={() => {}} isPlaying={false} />);
    expect(getByLabelText('Pause')).toBeDisabled();
  });
});

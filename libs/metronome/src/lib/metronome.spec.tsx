import { render } from '@testing-library/react';

import Metronome from './metronome';

describe('Metronome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Metronome />);
    expect(baseElement).toBeTruthy();
  });
});

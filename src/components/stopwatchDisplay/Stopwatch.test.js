// start testing
import React from 'react';
import { render, screen } from '@testing-library/react';

import StopwatchDisplay from './StopwatchDisplay';

describe( 'StopwatchDisplay' ,() => { 
    it( 'renders StopwatchDisplay component' , () => { 
        render( <StopwatchDisplay /> ); 
        expect(screen.getByText( 'Stopwatch' )).toBeInTheDocument();
    });

    it('has a start button', () => {
        render(<StopwatchDisplay />);
        expect(screen.getByText('Start')).toBeInTheDocument();
    });

    it('has a stop button', () => {
        render(<StopwatchDisplay />);
        expect(screen.getByText('Stop')).toBeInTheDocument();
    });

    it('has a reset button', () => {
        render(<StopwatchDisplay />);
        expect(screen.getByText('Reset')).toBeInTheDocument();
    });
 });
import React from "react";
import {Transition, TransitionGroup} from "react-transition-group";

interface TransitionProps<T> {
    children: T,
    location: string
}

const TIMEOUT: number = 450;
const TIMING_FUNCTION : string = "cubic-bezier(0,1.5,1,1.05)";

const getTransitionStyles:any = {
    entering: {
        position: "absolute",
        opacity: 0,
        transform: "translateX(-50%)",
    },
    entered: {
        transition: `opacity ${TIMEOUT}ms ${TIMING_FUNCTION}, transform ${TIMEOUT}ms ${TIMING_FUNCTION}`,
        opacity: 1,
        transform: "translateX(0px)",

    },
    exiting: {
        transition: `opacity ${TIMEOUT}ms ${TIMING_FUNCTION}, transform ${TIMEOUT}ms ${TIMING_FUNCTION}`,
        opacity: 0,
        transform: "translateX(50%)",
    },
};

const PageTransition:React.FC<TransitionProps<React.ReactChild>> = ({location, children}) => {
    return (
        <TransitionGroup>
            <Transition key={location} timeout={{enter:300, exit:300}}>
                {(state) => (
                    <div style={{...getTransitionStyles[state]}}>{children}</div>
                )}
            </Transition>
        </TransitionGroup>
    );
};

export default PageTransition;
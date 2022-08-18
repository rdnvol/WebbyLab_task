import React from 'react';
import classes from './FilmsList.module.css'

const MyModal = ({children, visible, setVisible}) => {
    const rootClasses = [classes.myModule]
    if(visible)
    {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModule__content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;



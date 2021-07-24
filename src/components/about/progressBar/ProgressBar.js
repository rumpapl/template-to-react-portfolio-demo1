
import React from 'react';
import './ProgressBarStyle.css';

const ProgressBar = ({done}) => {

    const [style, setStyle] = React.useState({});
	
    React.useEffect(() => {
        const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		setStyle(newStyle);
    }, []);

    return (
        <div className="progress">
        <div className="progress-done" style={style}>
        </div>
    </div>
    )
}

export default ProgressBar

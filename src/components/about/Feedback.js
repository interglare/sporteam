import React from 'react';

class Feedback extends React.Component{
    render(){
        return <div style={{marginTop: '10px'}}>
            <iframe title="feedback form" src="https://docs.google.com/forms/d/e/1FAIpQLSdORQQfe8ZM13q7Pyy3AV9J3WB_3HXv13WwKso7Wt62W78vnw/viewform?embedded=true" 
                    width="100%" 
                    height="891" 
                    frameBorder="0" 
                    marginHeight="0"
                    marginWidth="0">Загрузка...
            </iframe>
        </div>
    }
}

export default Feedback;
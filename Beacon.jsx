// Task component - represents a single beacon
Beacon = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        beacon: React.PropTypes.object.isRequired
    },
    render() {
        return (
        <div className="row">
                <div className="col s4 offset-s4">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Card Title</span>
                            <p>{this.props.beacon.text}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
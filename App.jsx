// App component - represents the whole app
App = React.createClass({
    getBeaconRegion() {
        return {
            beacons: [
                { _id: 1, text: "This is task 1" },
                { _id: 2, text: "This is task 2" },
                { _id: 3, text: "This is task 3" }
            ]
        }
    },

    renderBeacons() {
        return this.getBeaconRegion().beacons.map((beacon) => {
            return <Beacon key={beacon._id} beacon={beacon} />;
        });
    },

    render() {
        return (
            <div className="container">

                {this.renderBeacons()}

            </div>
        );
    }
});
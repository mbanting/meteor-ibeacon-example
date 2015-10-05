// App component - represents the whole app

var reactiveBeaconRegion;
Meteor.startup(function(){
    if (Meteor.isCordova) {
        reactiveBeaconRegion = new ReactiveBeaconRegion({uuid: "F7826DA6-4FA2-4E98-8024-BC5B71E0893E", identifier: "beacondemo"});
    }
})

App = React.createClass({

    mixins: [ReactMeteorData],

    getMeteorData() {
        var beaconsDetected;
        if (reactiveBeaconRegion != null) {
            beaconsDetected = reactiveBeaconRegion.getBeaconRegion().beacons;
        }
        return {
              beacons: beaconsDetected
        }
    },

    renderBeacons() {
        return this.data.beacons.map((beacon) => {
            return <Beacon key={beacon.uuid} beacon={beacon} />;
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
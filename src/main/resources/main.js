const libCluster = require '/lib/xp/cluster';
log.info(`Starting ${app.name} ${app.version} isMaster:${libCluster.isMaster()} config:${JSON.stringify(app.config, 4)}`);
__.disposer(function() {
	log.info(`Stopping ${app.name} ${app.version} isMaster:${libCluster.isMaster()} config:${JSON.stringify(app.config, 4)}`);
});

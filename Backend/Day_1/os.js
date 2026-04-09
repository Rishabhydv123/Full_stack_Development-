const os = require('os');

console.log(' OS MODULE INFO\n');

// CPU Info
console.log('🚀 CPUs:\n', os.cpus());

// Memory
console.log('🚀 Free Memory:', os.freemem());
console.log('🚀 Total Memory:', os.totalmem());

// File paths
console.log('🚀 Dev Null:', os.devNull);
console.log('🚀 Home Directory:', os.homedir());
console.log('🚀 Temp Directory:', os.tmpdir());

// OS Details
console.log('🚀 Platform:', os.platform());
console.log('🚀 Architecture:', os.arch());
console.log('🚀 OS Type:', os.type());
console.log('🚀 OS Release:', os.release());
console.log('🚀 OS Version:', os.version());
console.log('🚀 Machine:', os.machine());

// System Info
console.log('🚀 Hostname:', os.hostname());
console.log('🚀 Uptime (seconds):', os.uptime());
console.log('🚀 Load Average:', os.loadavg());

// CPU Parallelism
console.log('🚀 Available Parallelism:', os.availableParallelism());

// Constants & Endianness
console.log('🚀 Constants:', os.constants);
console.log('🚀 Endianness:', os.endianness());

// Network Interfaces
console.log('🚀 Network Interfaces:\n', os.networkInterfaces());

// End of Line marker
console.log('🚀 EOL:', JSON.stringify(os.EOL));

// Process Priority
const pid = process.pid;

try {
    console.log('🚀 Current Priority:', os.getPriority(pid));
    
    // Set new priority (may require admin rights)
    os.setPriority(pid, 10);
    console.log('🚀 Updated Priority:', os.getPriority(pid));
} catch (err) {
    console.log('⚠️ Priority change not allowed:', err.message);
}

// User Info
console.log('🚀 User Info:', os.userInfo());

console.log('\n================ END ================');
const information = document.getElementById('info');
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const callPing = async () => {
  const response = await window.versions.ping();
  const debug = document.getElementById('debug');
  debug.innerText = response;
}
callPing();
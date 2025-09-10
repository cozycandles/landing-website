$(document).ready(function () {
    initializeRedirector();
  });
  
  const redirectMap = {
    'qrcode': '/landing-website/index.html',
    'instagram': 'https://instagram.com/cozycandles_8',
    'default': '/landing-website/index.html' // fallback if ref is not recognized
  };
  
  function initializeRedirector() {
    const urlParams = new URLSearchParams(window.location.search);
    const refParam = urlParams.get('ref');
  
    if (refParam && redirectMap[refParam]) {
        const destination = buildRedirectUrl(redirectMap[refParam]);
        performRedirect(refParam, destination);
    } else if (refParam && !redirectMap[refParam]) {
        console.warn('Unknown ref parameter:', refParam);
        const defaultDestination = buildRedirectUrl(redirectMap['default']);
        performRedirect(refParam, defaultDestination);
    } else {
        console.warn('Unknown ref parameter:', refParam);
        const defaultDestination = buildRedirectUrl(redirectMap['default']);
        performRedirect("default", defaultDestination);
    }
  }
  
  function performRedirect(ref, destination) {
    $('#redirectLoader').show();
    $('#mainContent').hide();
  
    $('#redirectMessage').text(`Redirecting you from ${ref} source...`);
  
    setTimeout(function () {
        window.location.href = destination;
    }, 1500); // 1.5 second delay
  }
  
  
  function getHost() {
    return `${window.location.protocol}//${window.location.host}`;
  }
  
  function buildRedirectUrl(path) {
    // If path already contains protocol, return as is
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }
  
    // If path starts with /, it's absolute path from root
    if (path.startsWith('/')) {
        return `${getHost()}${path}`;
    }
  
    // If path doesn't start with /, treat as relative to current directory
    const currentPath = window.location.pathname;
    const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
    return `${getHost()}${currentDir}${path}`;
  }
  
  function getHostInfo() {
    return {
        protocol: window.location.protocol,
        hostname: window.location.hostname,
        port: window.location.port,
        host: window.location.host,
        fullHost: getHost(),
        currentPath: window.location.pathname,
        currentDir: window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1)
    };
  }
  
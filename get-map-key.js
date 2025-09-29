exports.handler = async function(event, context) {
  // Double-check environment variable
  const key = process.env.AZURE_MAPS_KEY;
  
  if (!key) {
    return {
      statusCode: 500,
      body: 'SERVER_ERROR: AZURE_MAPS_KEY not set in Netlify environment'
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "no-cache" // Prevent caching issues
    },
    body: key
  };
};

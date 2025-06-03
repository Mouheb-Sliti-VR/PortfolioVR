'use client';

// This component now uses a Sketchfab iframe embed
export function ClientAvatar3D() {
  // IMPORTANT: Replace this URL with your Sketchfab model's embed URL.
  // 1. Upload your model to Sketchfab.
  // 2. Go to your model's page, click "Embed".
  // 3. Copy the src URL from the iframe code and paste it here.
  // Example placeholder URL (replace with your actual Sketchfab model embed link):
  const sketchfabEmbedUrl = "https://sketchfab.com/models/ff78537d3c0341d6a329584ed731b698/embed";

  return (
    <div className="relative" style={{ width: '85%', height: '120%', minHeight: '300px', maxHeight: '400px' }}>
      {/* Enhanced animated border */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none z-0 animate-gradient-x bg-gradient-to-tr from-white via-primary to-purple-500 blur-[2px]" />
      <div
        style={{
          borderRadius: '1rem',
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          boxShadow: '0 0 0 .5px #a855f7', // solid purple outline always visible
        }}
        className="relative z-10 shadow-xl border-2 border-purple-500 transition-shadow duration-300 bg-card
          hover:shadow-[0_0_32px_0_rgba(168,85,247,0.35)] dark:hover:shadow-[0_0_48px_0_rgba(168,85,247,0.55)]"
        aria-label="Interactive 3D model from Sketchfab"
      >
        {sketchfabEmbedUrl ? (
          <iframe
            title="Mouheb Sliti 3D Avatar"
            src={sketchfabEmbedUrl}
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted/50">
            <p className="text-muted-foreground">Loading 3D Model...</p>
          </div>
        )}
      </div>
    </div>
  );
}


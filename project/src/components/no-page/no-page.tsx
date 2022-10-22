function NoPage () {
  return (
    <div style={{
      maxWidth: '400px',
      margin: 'auto',
      paddingTop: '10%',
      textAlign: 'center'
    }}
    >
      <h1>Page not found</h1>
      <button
        style={{
          background: 'rgba(0, 0, 0, 0.4)',
          padding: '10px 20px',
          borderRadius: '20px',
          border: 'none',
          cursor: 'pointer',
          color: '#ffffff'
        }}
      >
        Back to main page
      </button>
    </div>
  );
}

export default NoPage;

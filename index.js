const { app } = require('./dist/server.js');

const PORT = process.env.PORT || 9001;

console.log(process.env.NODE_ENV);

app.listen(PORT, () => {
	console.log('app started on port:', `localhost:${PORT}`);
});

import { createServer } from 'http';

const PORT = 3000;

const server = createServer((req, res) => {
	if (req.method === 'POST' && req.url === '/backend.php') {
		let body = '';

		req.on('data', chunk => (body += chunk));

		req.on('end', () => {
			let data = {};
			try {
				data = JSON.parse(body || '{}');
			} catch {
				res.writeHead(400, { 'Content-Type': 'application/json' });
				return res.end(
					JSON.stringify({ status: 'error', message: 'JSON inválido' })
				);
			}

			const { username = '', password = '' } = data;
			const errors = {};

			if (username.trim().length < 3) {
				errors.username = 'El usuario debe tener al menos 3 caracteres.';
			}
			if (password.trim().length < 8) {
				errors.password = 'La contraseña debe tener al menos 8 caracteres.';
			}

			res.writeHead(Object.keys(errors).length ? 400 : 200, {
				'Content-Type': 'application/json',
			});
			res.end(
				JSON.stringify(
					Object.keys(errors).length
						? { status: 'error', errors }
						: { status: 'ok' }
				)
			);
		});
	} else {
		res.writeHead(405, { 'Content-Type': 'application/json' });
		res.end(
			JSON.stringify({ status: 'error', message: 'Método no permitido' })
		);
	}
});

server.listen(PORT, () => {
	console.log(`Backend escuchando en http://localhost:${PORT}/backend.php`);
});

import { env, createExecutionContext, waitOnExecutionContext } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';
import worker from '../src/index';

// For now, you'll need to do something like this to get a correctly-typed
// `Request` to pass to `worker.fetch()`.
const IncomingRequest = Request<unknown, IncomingRequestCfProperties>;

describe('Biglex Link Redirects', () => {
	it('redirects empty path to biglexj.com', async () => {
		const request = new IncomingRequest('http://example.com/');
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		
		expect(response.status).toBe(302);
		expect(response.headers.get('Location')).toBe('https://biglexj.com/');
	});

	it('redirects valid key (youtube) to correct URL', async () => {
		const request = new IncomingRequest('http://example.com/youtube');
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		
		expect(response.status).toBe(302);
		expect(response.headers.get('Location')).toBe('https://youtube.com/@biglexj');
	});

	it('returns customized 404 page for invalid links', async () => {
		const request = new IncomingRequest('http://example.com/invalid-link-test');
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);
		
		expect(response.status).toBe(404);
		const text = await response.text();
		expect(text).toContain('Enlace no encontrado');
		expect(text).toContain('/invalid-link-test');
	});
});

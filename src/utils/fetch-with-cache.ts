const cache = {}
let cacheTimer = 0

export async function fetchWithCache(url, options, time = 30 * 1000) {
	const now = new Date().getTime()
	if (!cache[url] || cache[url].cacheTimer < now) {
		cache[url] = await fetch(url, options)
		cache[url].cacheTimer = getCacheTimer(time)
	}
	return cache[url]
}

function getCacheTimer(time) {
	const now = new Date().getTime()
	if (cacheTimer < now + time) {
		cacheTimer = now + time
	}
	return cacheTimer
}
